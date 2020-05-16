export const HomeComponent = {
  render: () => {
    return `
        <section>
        <header class="homepage">
        <img class="sliderImg" src=${firstSliderImage} alt="Landscape" />
            <h1 class="slider, sliderText">Pierwszy tekst</h1>
            <div class="dots">
                <span id="one" class="active"></span>
                <span id="two"></span>
                <span id="three"></span>
            </div>
        </header>
        </section>
      `;
  }
}


//Banner slider
let firstSliderImage = 'https://cdn.pixabay.com/photo/2015/03/26/09/39/pool-690034_1280.jpg';
let secondSliderImage = 'https://cdn.pixabay.com/photo/2016/08/22/16/23/massage-therapy-1612308_1280.jpg';
let thirdSliderImage = 'https://cdn.pixabay.com/photo/2015/01/05/22/29/wellness-589774_1280.jpg';
//   firstSliderImage.style.backgroundPosition = ('cover')

const slideList = [{
    img: firstSliderImage,
    text: "Pierwszy tekst"
  },
  {
    img: secondSliderImage,
    text: "Drugi tekst"
  },
  {
    img: thirdSliderImage,
    text: "Trzeci tekst"
  }
];

const time = 3000;
let active = 0;

const changeDot = () => {
  const dots = [...document.querySelectorAll('.dots span')]
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
}

const changeSlide = () => {
  let image = document.querySelector('img.sliderImg');
  const h1 = document.querySelector('h1.sliderText');
  active++;

  if (active === slideList.length) {
    active = 0;
  }

  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;

  changeDot();
}

// setInterval(changeSlide, time);