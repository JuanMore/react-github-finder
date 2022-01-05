import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const githubInstance = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

   // get search results 
export const searchUsers = async (text) => {
    
    // declare params
const params = new URLSearchParams({
        //define q to text input
        q: text
    })
    const response = await githubInstance.get(`/search/users?${params}`)
    // returns data as an object then we pull out items
    return response.data.items
   }


  // get user and repos
export const getUserandRepos = async (login) => {
    // get user and repos 
    const [user, repos] = await Promise.all([
        githubInstance.get(`/users/${login}`),
            githubInstance.get(`/users/${login}/repos`)
    ])

    // find user and repo data
    return {user: user.data, repos: repos.data}
  }

