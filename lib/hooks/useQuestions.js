import useSWR from 'swr'

import fetch from '../fetch'

function useQuestions() {
  return useSWR('/api/questions', fetch)
}

export default useQuestions