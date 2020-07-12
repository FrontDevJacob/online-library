import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'

import utils from 'utils'

export const cache = new InMemoryCache()

const errorHandler = onError(({ graphQLErrors, networkError }) => {
    utils.setIsLoading(false)
    clearTimeout(timeoutId)
    timeoutId = undefined
    if (graphQLErrors) {
        const [{ extensions }] = graphQLErrors
        if (extensions) {
            const errorHeader = extensions.exception.errorHeader || 'Request Processing'
            const errorMessage =
                extensions.exception.errorMessage ||
                'The server cannot temporarily process your request'
            switch (true) {
                case errorHeader === 'Request Processing':
                    utils.setFeedbackData(
                        'Request Processing',
                        'The server cannot temporarily process your request',
                        'Refresh the application',
                        () => process.env.NODE_ENV === 'production' && window.location.reload()
                    )
                    break
                default:
                    utils.setFeedbackData(errorHeader, errorMessage)
            }
        }
    }
    if (networkError && networkError.message.includes('401')) {
        utils.setFeedbackData(
            'Authorization',
            'The authentication cookie is invalid, log in again',
            'Okey',
            () => utils.redirectTo('/user/login')
        )
    }
})

let timeoutId: number | undefined

const customFetch = (uri: any, options: any) => {
    !timeoutId && (timeoutId = setTimeout(() => utils.setIsLoading(true), 500))
    return fetch(uri, options)
}

const handleLoader = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
        utils.setIsLoading(false)
        clearTimeout(timeoutId)
        timeoutId = undefined
        return response
    })
})

export default new ApolloClient({
    cache,
    link: ApolloLink.from([
        errorHandler,
        handleLoader,
        new HttpLink({
            uri: `${document.location.protocol}//${document.location.host}/graphql`,
            fetch: customFetch
        })
    ])
})
