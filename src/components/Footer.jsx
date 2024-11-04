

const Footer = () => {
  return (
    <div>
      <div className="main-container">
        <div>
            <h1 className="text-center text-white text-3xl md:text-4xl mb-2 roboto-medium-italic">Follow Us</h1>
            <p className="text-wrap text-white mx-4 roboto-light-italic text-center">Join our social media accounts to stay updated on our latest shawarma recipes and trends.</p>
  

        </div>
        <div>
            {/* <a href="https://www.facebook.com/shawarmaSpot/" target="_blank" rel="noopener noreferrer">
              <img src="facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/shawarma_spot/" target="_blank" rel="noopener noreferrer">
              <img src="instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com/shawarmaSpot/" target="_blank" rel="noopener noreferrer">
              <img src="twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.pinterest.com/shawarma_spot/" target="_blank" rel="noopener noreferrer">
              <img src="pinterest.png" alt="Pinterest" />
            </a> */}
        </div>
        <div>
            <h1 className="text-center text-white text-3xl md:text-4xl mb-2 roboto-medium-italic">Contact Us</h1>
            <p className="text-wrap text-white mx-4 roboto-light-italic text-center">If you have any questions or need assistance, please dont hesitate to reach out.</p>
            <p className="text-center text-white roboto-light-italic">Email:  <a href="mailto:info@shawarmaSpot.com">info@AbshawarmaSpot.com</a></p>
            <p className="text-center text-white roboto-light-italic">Phone:  <a href="tel:0123456789">012-345-6789</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
