export default function MenuPage() {
  return (
  <><section className="container mx-auto p-4 service-for-every-dog">
      <div className="row flex flex-wrap justify-center">
        <div className="col-xl-12  text-right">
          <h2 className="adopt-pet-heading text-3xl font-bold  mb-4">
            Your Pet Adoption Journey With HeartWarmingPet
          </h2>
        </div>
        </div>
        <div class="flex flex-wrap justify-between items-center mb-4 service-row">
            <div class="w-full xl:w-1/3 p-4 text-left">
              <img src="/Main-page-dog.jpg" alt="Cute dog" class="w-full h-auto mb-4 rounded-lg" />
            </div>
      
            <div class="w-full xl:w-1/2 p-4 text-left">
              <div class="flex flex-col space-y-8">
                  
                  <div class="description">
                      <label class="title text-lg font-bold mb-2">Search Pet</label>
                      <div class="content text-gray-600">
                          Adopt a dog or cat who is right for you. Simply enter your city above to start your search.
                      </div>
                  </div>
                
                  <div class="description">
                      <label class="title text-lg font-bold mb-2">Connect</label>
                      <div class="content text-gray-900">
                          Once you find a pet, click <b>SHOW NUMBER</b> to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.
                      </div>
                  </div>
                  
                  <div class="description">
                      <label class="title text-lg font-bold mb-2">AdoptLove</label>
                      <div class="content text-gray-600">
                          The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.
                      </div>
                  </div>

                  <div class="description">
                      <label class="title text-lg font-bold mb-2">Free Vet Consultation</label>
                      <div class="content text-gray-600">
                      <a href="/" class="text-blue-600 hover:text-blue-900 tpn-home-link" target="_top">HeartWarmingPet</a> will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.
                      </div>
                  </div>
              </div>
            </div>
        </div>
     
  </section>
  <section className=" py-5 how-it-works-section bg-pink">
        <div className="container mx-auto p-4 bg-pink">
          <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
          <div className="flex flex-wrap justify-center contain-flex">
            <div className="w-full md:w-1/4 xl:w-1/3 p-6 contain-item">
              <h4 className="text-2xl font-bold mb-2">
                Search
              </h4>
              <p className="text-white"> 
                Simply enter your city above to start your search.
              </p>
            </div>
            <div className="w-full md:w-1/4 xl:w-1/3 p-6 contain-item">
              <h4 className="text-2xl font-bold mb-2">
                Adopt
              </h4>
              <p className="text-white">
                Finally adopt the dog or cat you love
              </p>
            </div>
            <div className="w-full md:w-1/4 xl:w-1/3 p-6 contain-item">
              <h4 className="text-2xl font-bold mb-2">
                Meet
              </h4>
              <p className="text-white">
                Schedule your appointment to meet the pet you love
              </p>
            </div>
            
          </div>
        </div>
    </section>

 
  <section className="footer bg-gray-800 text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between">
    <div className="w-full md:w-1/2 text-left mb-4 md:mb-0">
      <h4 className="text-lg font-bold mb-2">Contact Us</h4>
      <p className="mb-1">Email: <a href="mailto:support@heartwarmingpet.com" className="text-gray-400 hover:text-gray-200">support@heartwarmingpet.com</a></p>
      <p className="mb-1">Phone: <a href="tel:+1234567890" className="text-gray-400 hover:text-gray-200">+1 (234) 567-890</a></p>
      <p className="mb-1">Address: 123 Pet Street, Animal City, Petland, 56789</p>
    </div>

    <div className="w-full md:w-1/2 text-right">
      <h4 className="text-lg font-bold mb-2">Follow Us</h4>
      <div className="flex justify-end space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="text-center mt-4">
    <p>© 2024 HeartWarmingPet. All Rights Reserved.</p>
  </div>
</section></>

  );
}
