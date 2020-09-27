import React, {useState} from 'react'
import {Box} from '@chakra-ui/core'
import {useSession} from 'next-auth/client'
import {ImFire} from 'react-icons/im'
import Toast from '../components/toast'
import CustomModal from '../components/customModal'

// const Flame = ({ selected = false, onClick, checkAuth, children }) => {
//     return (
//         <Box onClick={onClick} checkAuth={checkAuth}>
//             {children}
//         </Box>
//     )
// }

const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? "star selected" : "star"} onClick={onClick} />
  );

export default function FlameRating({ totalFlames }){
    const [flamesSelected, setFlamesSelected] = useState(0)
    const [session] = useSession()
    
    const checkAuth = () => {    
        session ? 
        <Toast title='Thank you for rating this question' description='You just made someone feel happier 🤗' status='success'/>
        :
        <CustomModal />
    }

    return (
    <>
        <Box>
            {[...Array(totalFlames).map((n, i) => (
                <Flame 
                    key={i}
                    selected={i < flamesSelected}
                    onClick={ () => setFlamesSelected(i + 1), checkAuth }
                >
                    {selected ? <ImFire /> : <span> 🔥 </span>}
                </Flame>
            ))]}
            <small>{flamesSelected} of {totalFlames} flames</small>
        </Box>
    </>
    )
}