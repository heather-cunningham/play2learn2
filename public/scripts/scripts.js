// Global Scripts, Homepage Scripts 
const blockQuote = document.getElementsByClassName("testimonial-quote")[0];

const fetchQuotes = async () => {
  try{
    const response = await fetch("/testimonials");
    
    if(response && response.status !== 404){
      const testimonialsJSON = await response.json();
      let randomTestimonial;
      
      if(testimonialsJSON && testimonialsJSON.length > 0) {
        randomTestimonial = getRandomTestimonial(testimonialsJSON);
      }
      
      if (blockQuote) {
        blockQuote.id = "quote" + randomTestimonial.id + "_"
          + (randomTestimonial.citation).replaceAll(" ", "")
            .replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, "")
            .trim();
        blockQuote.innerHTML = `"${randomTestimonial.quote.trim()}" \
        <cite class="testimonial-citation" name="testimonial-citation">--${randomTestimonial.citation}</cite>`;
      }
    } else {
      if (blockQuote)
        blockQuote.innerHTML = `Loading testimonials...`;
    }
  } catch (error) {
    if (blockQuote) {
      console.log('Error fetching testimonials:', error)
      blockQuote.innerHTML = `Loading testimonials...`;
    }
  }
};

const getRandomTestimonial = (testimonialsJSON) => {
  return testimonialsJSON[Math.floor(Math.random() * testimonialsJSON.length)];
};

const cycleQuotes = () => {
  fetchQuotes();
  setInterval(fetchQuotes, 10000);
};
window.addEventListener("load", ()=> cycleQuotes());