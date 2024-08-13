export default function MenuPage() {
  return (
  <><section className="container mx-auto p-4 service-for-every-dog">
      <div className="row flex flex-wrap justify-center">
        <div className="col-xl-12 md:w-1/2 xl:w-1/3 p-4 text-right">
          <h2 className="adopt-pet-heading text-3xl font-bold  mb-4">
            Your Pet Adoption Journey With HeartWarmingPet
          </h2>
        </div>
      </div>
      <div className="col-xl-12 md:w-1/2 xl:w-1/3 p-4 text-left">
            <img src="/Main-page-dog.jpg" alt="Cute dog" className="w-full h-auto mb-4 rounded-lg" />
        </div>
      <div class="flex flex-wrap justify-center mb-4 service-row">
      <div className="svg-container">
      <div className="description mb-8">
          <label className="title text-lg font-bold mb-2">
            Search Pet
          </label>
          <div className="content-text-muted text-gray-600">
            Adopt a dog or cat who is right for you. Simply enter your city above to start your search.
          </div>
      </div>
      </div>
      </div>
      <div class="flex flex-wrap justify-center mb-4 service-row">
      <div className="svg-container">
      <div className="description mb-8">
        <label className="title text-lg font-bold mb-2">
          Connect
        </label>
        <div className="content-text text-gray-900">
          Once you find a pet, click <b>SHOW NUMBER</b> to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.
        </div>
      </div>
      </div>
      </div>
      <div class="flex flex-wrap justify-center mb-4 service-row">
      <div className="svg-container">
      <div className="description mb-8">
        <label className="title text-lg font-bold mb-2">
          AdoptLove
        </label>
        <div className="content text-gray-600">
          The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.
        </div>
      </div>
      </div>
      </div>
      <div class="flex flex-wrap justify-center mb-4 service-row">
      <div className="svg-container">
        <div class="w-full md:w-1/2 xl:w-1/3 p-6 description">
        <label class="text-lg font-bold title">Free Vet Consultation</label>
        <div class="text-gray-600 content">
          <a href="/" class="text-blue-600 hover:text-blue-900 tpn-home-link" target="_top">HeartWarmingPet</a> will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.
          </div>
        </div>
      </div>
      </div>
  </section>
  <section className="bg-white py-20 how-it-works-section">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
          <div className="flex flex-wrap justify-center contain-flex">
            <div className="w-full md:w-1/3 xl:w-1/3 p-6 contain-item">
              <h4 className="text-2xl font-bold mb-2">
                Search
              </h4>
              <p className="text-gray-600"> 
                Simply enter your city above to start your search.
              </p>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-6 contain-item">
              <h4 className="text-2xl font-bold mb-2">
                Meet
              </h4>
              <p className="text-gray-600">
                Schedule your appointment to meet the pet you love
              </p>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-6 contain-item">
              <h4 className="text-2xl font-bold mb-2">
                Adopt
              </h4>
              <p className="text-gray-600">
                Finally adopt the dog or cat you love
              </p>
            </div>
          </div>
        </div>
    </section></>

  );
}