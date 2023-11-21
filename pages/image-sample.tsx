import { NextPage } from 'next'
import Image from 'next/image'

import NextImage from '../public/images/rabbit.jpg'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>imgタグとimageコンポーネントの違い</h1>
            <p>imgタグ</p>
            <img src="/images/rabbit.jpg" alt="rabbit"/>
            <p>Imageコンポーネント</p>
            <Image src={NextImage} alt="rabbit" placeholder="blur"/>
        </div>
    )
}

export default ImageSample