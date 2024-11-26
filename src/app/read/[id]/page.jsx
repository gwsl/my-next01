import ReadOne from '@/app/page/ReadOne';
import ReadThree from '@/app/page/ReadThree';
import ReadTwo from '@/app/page/ReadTwo';
import React from 'react';

// 동적 쿼리는 
async function page({params}) {
    const param = await params;
    const msg = param.id;
    console.log("msg : "+ msg )
    let str = "";
    if(msg === '1'){
        str = <ReadOne />;
    }else if (msg === '2') {
        str = <ReadTwo />;
    }else if (msg === '3') {
        str = <ReadThree />;
    }
    return (
        <>
            <h2> 하이</h2>
            {str}


            <h3>{msg === '1' && "html 선택"}</h3>
            <h3>{msg === '2' && "css 선택"}</h3>
            <h3>{msg === '3' && "js 선택"}</h3>

            <h3>{msg === '1' ? "HTML 선택" : msg === '2' ? "CSS 선택" : "JS 선택"}</h3>
        </>
    );
}

export default page;