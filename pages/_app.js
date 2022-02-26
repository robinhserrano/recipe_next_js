import '../styles/globals.css';
import Navbar from '../component/Navbar';
import Image from 'next/image';
import bgImage from '../public/static/background.png';
import '../styles/globals.css';
// <Image src={bgImage} alt="background" layout="fill" objectFit="cover" objectPosition="center" />

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<div>
				<Navbar>
					<Component {...pageProps} />
				</Navbar>
			</div>
		</div>
	);
}

export default MyApp;
