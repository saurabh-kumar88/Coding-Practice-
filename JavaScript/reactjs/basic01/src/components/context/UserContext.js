/**Step 1 create context and define context provider and consumer  */
import React from 'react'

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer } // make sure to export provider and consumer components
