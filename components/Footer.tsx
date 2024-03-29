import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {/* <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div> */}
          <div>2024 © by Van Thong</div>
        </div>
      </div>
      {/* <p>vanthonglee.com © 2024 by Van Thong Lee · CC BY-NC 4.0</p> */}
    </footer>
  )
}
