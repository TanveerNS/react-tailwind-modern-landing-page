import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-veryDarkBlue mt-12">
      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <div>
            <img src="img/logo-white.svg" class="h-8" alt="" />
          </div>
          <div class="flex justify-center space-x-4">
            <a href="#">
              <img src="img/icon-facebook.svg" alt="" class="h-8" />
            </a>
            <a href="#">
              <img src="img/icon-youtube.svg" alt="" class="h-8" />
            </a>
            <a href="#">
              <img src="img/icon-twitter.svg" alt="" class="h-8" />
            </a>
            <a href="#">
              <img src="img/icon-pinterest.svg" alt="" class="h-8" />
            </a>
            <a href="#">
              <img src="img/icon-instagram.svg" alt="" class="h-8" />
            </a>
          </div>
        </div>
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="hidden container text-center pb-6 flex text-white md:block">
        <p>Copyright &copy; 2022, All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer