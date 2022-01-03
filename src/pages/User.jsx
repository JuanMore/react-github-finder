import { useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import GithubContext from '../context/github/GithubContext'

// with react router v6 bring useParams
function User() {
    const { getUser, user } = useContext(GithubContext)

    // declare params equal to useParams()
    const params = useParams()
    useEffect(() => {
        getUser(params.login)
    }, [])
    return (
        <div>
            {user.login}
        </div>
    )
}

export default User
