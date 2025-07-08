import { render } from "@testing-library/react";
import { useEffect , useState } from "react";
import {styled} from 'styled-components';

// useEffect(() => {
//   // کد اثر جانبی
//   return () => {
//     // تابع cleanup (اختیاری)
//   };
// }, [dependencies]); // آرایه وابستگی‌ها


//اجرا پس از هربار رند شدن:

export default function App () {
    const [count , setCount]= useState (0);
//     useEffect (()=> {
//         console.log("first")
//     })
// }
//با آرایه خالی (اجرا فقط پس از مونت اولیه)


        // useEffect (()=>{
        //     console.log("first")
        // },[])

       

        return (
            <>
                <button onClick={()=>setCount(count +1)}>click</button>
                <h1>{count}</h1>
            </>
        )// خب میبینید بعد از هربار کلیک شدن بر روی
        //button اینا طوری کار میکنند
    }



//so with the update the localhost 
//this mother fucker agin is update 
//با هربار اپدیت کامپوننت اینم باز هم اپدیت میشه
//حالا میخواهیم چیزهای کاربردیش رو بررسی کنیم
// export default function App () {
    
//         useEffect  (()=> {
//             console.log("first")
//         }) 

//     return (
//         <>
//         <p>fuck the polcie offcer</p>
//         </>
//     )
// }


//مثل نمایش یک پیغام روی صفحه

//خب با کلیک بروی باتن یک مسیج نمایش داده میشود


// export default function App () {
//     const [isValidate , setValidate] = useState (false)
    
//     useEffect (() => {
//         const p = document.getElementById("p");
//         if (isValidate) {
//             const Text = setTimeout(()=>{
//                 setValidate(false)
//                 p.style.display='block'
//             },2000)
//             return () => clearTimeout(Text)
//         }
//     },[isValidate])

//     return (
//         <>
//             <button onClick={()=>setValidate(true)} >Show</button>
            
//         { isValidate &&
//             <p id="p"
//         style={{marginTop: '20px',
//           padding: '15px',
//           backgroundColor: '#4ecdc4',
//           color: 'white',
//           borderRadius: '10px',
//           fontSize: '24px',
//           fontWeight: 'bold'}}>
//             hello mother fucker
//         </p>}
//         </>
//     )
// }
//همان بالایی با نسخه ی خودم
// export default function App () {
//     const [validate , setValidate] = useState (false)
//         useEffect (()=>{
//             if (validate) {
//                 const Time = setTimeout(()=> {
//                     setValidate(false)
//                 },3000)
//                 return () => clearTimeout(Time)
//             }
//         })
//     return (
//         <>
//             <button onClick={()=>setValidate(true)} >Show</button>
//             {validate && 
//                 <p id="p"
//                 style={{
//                         marginTop: '20px',
//                         padding: '15px',
//                         backgroundColor: 'green',
//                         color: 'white',
//                         borderRadius: '10px',
//                         fontSize: '24px',
//                         fontWeight: 'bold',
//                         width:'150px'
//                     }}
                


//                 >Hello JonSina</p>
//             }
//         </>
//     )
// }

