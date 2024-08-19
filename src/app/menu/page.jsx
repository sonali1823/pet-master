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

  <section className="book-groomer-section adopt-love-section"> 
    <div className="card-book">
    <div className="foundation-content-container">
    <div className="foundation-content">
              <h2 className>#AdoptLove</h2>
              <p className="adopt-love-description">Approximately 1478 dogs &amp; cats die every day on road in India. <a className="underline-link-wt" href="/" target="_top">HeartWarmingPet</a> is on a mission to provide every dog and cat a home before 2035.
              It’s just one of the many ways ThePetNest! gives back and helps you become a part of something larger. Join ThePetStar Community and help setting up Pet houses in your surrounding for strays.
              </p>
    </div>            
    </div>
    </div>
  </section></>

  );
}
