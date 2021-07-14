import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';
import logo from '../../assets/logo.svg';
import Slider from 'react-slick';

const Home = () => {
  const [inputValue, setInpuntValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input value={inputValue} onChange={(e) => setInpuntValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Head" />
            <Card photo={restaurante} title="Head" />
            <Card photo={restaurante} title="Head" />
            <Card photo={restaurante} title="Head" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
