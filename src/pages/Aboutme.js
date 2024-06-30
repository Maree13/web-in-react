import './Aboutme.css';
import imgAboutMe from '../img/img-aboutme.jpg';

const Aboutme = () => {
  return (
    <section className="aboutme">
      <h1>Who am I</h1>
      <img src={imgAboutMe} alt="Author" className="aboutme-image" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        venenatis felis nec orci volutpat, sit amet ultricies massa dictum. Nam
        eget purus ac quam consectetur dapibus. In suscipit mi ut facilisis
        laoreet. Cras eget sem sit amet nisi vestibulum tempor in at urna. Morbi
        feugiat vestibulum magna, at convallis mauris tristique in. Aliquam erat
        volutpat. Praesent pharetra, nunc eget bibendum efficitur, lectus nisl
        facilisis libero, sit amet auctor lacus eros eget velit. Phasellus
        volutpat risus eu felis venenatis, sed elementum dui viverra. Donec
        ultrices velit a facilisis congue. Aenean et diam venenatis, feugiat
        libero sit amet, commodo neque. Sed dapibus, eros nec pretium
        scelerisque, nunc nisl luctus nunc, vel ullamcorper sapien neque sit
        amet erat. Ut posuere diam vel vestibulum pharetra.
      </p>
    </section>
  );
};

export default Aboutme;
