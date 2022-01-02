import { useContext} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    // pull in our variables from the Github Context
    const { users, loading } = useContext(GithubContext)
    

    // 'loading' & 'users' comes from Github Context
    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols04 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user}/>
               ))}
            </div>
        )
    }
    else {
       return <Spinner />
    }
    
}

export default UserResults
