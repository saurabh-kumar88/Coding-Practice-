import {useEffect} from 'react'
/** Every custom hook should start with a prefix 'use', 
 * it's a custom and also, Linters rely on this rule, to decide
 * wether rules of hooks apply to this function or not
 */
function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`
  },[count])
}

export default useDocumentTitle
