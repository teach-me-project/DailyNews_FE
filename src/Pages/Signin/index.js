import { CoverLeft } from './components/CoverLeft'
import { FormLogin } from './components/FormLogin'
import bg from '../../components/images/nenek.png'
import google from '../../components/images/Google.svg'
import facebook from '../../components/images/Facebook.svg'
import twitter from '../../components/images/Twitter.svg'
import { Link } from 'react-router-dom'


const Signin = () => {
    return (
        <>
            <div className='login'>
                <CoverLeft />
                <FormLogin />
            </div>
        </>
    )
}

export default Signin