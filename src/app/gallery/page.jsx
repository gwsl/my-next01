import Image from 'next/image';
import React from 'react';
import img01 from '/public/images/kitten-1.jpg'
import './gallery.css'

function page(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <Image src={img01} alt='' width={50} height={50}/>
                    </td>
                    <td>
                        <Image src="/images/coffee-blue.jpg" alt='' width={50} height={50}/>
                    </td>
                    <td>
                        <Image src={img01} alt='' width={50} height={50}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Image src={img01} alt='' width={50} height={50}/>
                    </td>
                    <td>
                        <Image src={img01} alt='' width={50} height={50}/>
                    </td>
                    <td>
                        <Image src={img01} alt='' width={50} height={50}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default page;