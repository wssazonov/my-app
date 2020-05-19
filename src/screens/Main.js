import React from 'react';

import { Navbar, Nav, Modal, Form, InputGroup, Row, Carousel, Card, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Img from 'react-cool-img';

import Slider from '../assets/icons/slider.png';

const StyledHeading = styled.h1`
	font-size: 13px;
	background: -webkit-gradient(linear, left top, right top, from(#63b9ed), to(#043e85));
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
	text-shadow: none;
`;
const StyledHeading1 = styled.h1`
	font-size: 13px;
	background: #7285a4;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
	text-shadow: none;
	margin-left: 1em;
`;

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: '',
		};

		this.onChange = this.onChange.bind(this);
	}

	state = {
		open1: false,
		open2: false,
	};

	onChange(e) {
		debugger;
		this.setState({
			checked: e.target.value,
		});
	}

	render() {
		const { open1, open2 } = this.state;
		return (
			<div style={{ backgroundColor: '#E5E5E5' }}>
				<Navbar bg="white" expand="lg" style={{ paddingBottom: 23 }}>
					<Navbar.Brand href="/FriendShip" style={{ justifyItems: 'flex-end', marginLeft: 40 }}>
						<img src={require('../assets/icons/logo.png')} alt="Search" style={{ height: 32 }} />
						<Row style={{ marginLeft: 0, marginTop: 8, marginBottom: -36, marginRight: 0 }}>
							<img
								src={require('../assets/icons/phone.png')}
								alt="Phone"
								style={{ height: 10, width: 10, marginTop: 3, marginRight: 6 }}
							/>
							<StyledHeading onClick={(e) => this.setState({ open2: true })}>
								8 800 112 02 99
							</StyledHeading>
							<p style={{ fontSize: 11, marginLeft: 6, color: '#7285A4' }}>с 11:00 до 20:00</p>
						</Row>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: '#000' }} />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav style={{ width: '65%' }}>
							<Form
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									height: 32,
									borderWidth: 0,
									width: '100%',
								}}
							>
								<Form.Group>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text
												style={{
													backgroundColor: '#F3F6F7',
													borderWidth: 0,
													borderRadius: 8,
													paddingRight: 6,
												}}
											>
												<img
													src={require('../assets/icons/search.png')}
													alt="Search"
													style={{ width: 16, height: 16, marginTop: 3 }}
												/>
											</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											type="text"
											placeholder="поиск"
											style={{
												backgroundColor: '#F3F6F7',
												borderTopRightRadius: 8,
												borderBottomRightRadius: 8,
												height: 32,
												borderWidth: 0,
												paddingLeft: 0,
												width: 500,
											}}
										/>
									</InputGroup>
								</Form.Group>
							</Form>
						</Nav>
						<Nav.Link href="/Catalog" style={{ color: '#1E264E', fontSize: 13 }}>
							<img
								src={require('../assets/icons/catalog.png')}
								alt="Search"
								style={{ width: 32, height: 32 }}
							/>
							Каталог
						</Nav.Link>
						<Nav.Link href="/Basket" style={{ color: '#1E264E', fontSize: 13, textAlign: 'left' }}>
							<img
								src={require('../assets/icons/basket.png')}
								alt="Search"
								style={{ width: 24, height: 24, marginTop: 20, marginRight: 3 }}
							/>
							Корзина (5)
							<p style={{ fontSize: 13, color: '#7285A4', marginLeft: 25, marginTop: -13 }}>152,058₽</p>
						</Nav.Link>
						<Nav.Link
							onClick={(e) => this.setState({ open1: true })}
							style={{ color: '#1E264E', fontSize: 13, marginRight: 40 }}
						>
							<img
								src={require('../assets/icons/profile.png')}
								alt="Search"
								style={{ width: 24, height: 24 }}
							/>
							Вход / Регистрация
						</Nav.Link>
					</Navbar.Collapse>
				</Navbar>
				<Modal show={open1} style={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24, paddingBottom: 19 }}>
					<p
						style={{
							fontSize: 13,
							color: '#7285A4',
							textAlign: 'center',
							marginTop: 40,
							marginLeft: 24,
							marginRight: 24,
						}}
					>
						Заполните поля чтобы зарегистрироваться на сайте
					</p>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>ФИО</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Почта</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Ваш номер телефона</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Код из смс</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
						<Col style={{ alignSelf: 'center' }}>
							<StyledHeading
								style={{
									fontSize: 13,
									textAlign: 'right',
								}}
								onClick={(e) => this.setState({ open: true })}
							>
								Выслать код
							</StyledHeading>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24, alignSelf: 'center' }}>
						<img
							width={241}
							height={40}
							alt="sale"
							src={require('../assets/icons/signup.png')}
							style={{ marginBottom: 20 }}
							onClick={() => this.setState({ open1: false })}
						/>
					</Row>
					<StyledHeading
						style={{
							fontSize: 13,
							textAlign: 'center',
							marginBottom: 20,
						}}
						onClick={() => this.setState({ open1: false })}
					>
						Войти на сайт
					</StyledHeading>
				</Modal>
				<Modal show={open2} style={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24, paddingBottom: 19 }}>
					<p
						style={{
							fontSize: 13,
							color: '#7285A4',
							textAlign: 'center',
							marginTop: 40,
							marginLeft: 24,
							marginRight: 24,
						}}
					>
						Заполните поля чтобы заказать обратный звонок
					</p>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Имя</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Телефон</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Удобное время звонка</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Email</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Номер заказа</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Сообщение</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24, alignSelf: 'center', marginBottom: 20 }}>
						<img
							width={241}
							height={40}
							alt="sale"
							src={require('../assets/icons/callme.png')}
							style={{ marginBottom: 20 }}
							onClick={() => this.setState({ open2: false })}
						/>
					</Row>
				</Modal>
				<Carousel controls={false} style={{ margin: 15, marginLeft: '5%', marginRight: '5%' }}>
					<Carousel.Item>
						<a href="/Catalog">
							<Img placeholder={Slider} style={{ width: '100%', height: '80%' }} />
						</a>
					</Carousel.Item>
					<Carousel.Item>
						<a href="/Catalog">
							<img
								width={'100%'}
								height={'80%'}
								alt="slide2"
								src={require('../assets/icons/slider.png')}
								style={{ borderRadius: 16 }}
							/>
						</a>
					</Carousel.Item>
					<Carousel.Item>
						<a href="/Catalog">
							<img
								width={'100%'}
								height={'80%'}
								alt="slide3"
								src={require('../assets/icons/slider.png')}
								style={{ borderRadius: 16 }}
							/>
						</a>
					</Carousel.Item>
				</Carousel>
				<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: 200 }}>
					<p style={{ fontSize: 32, color: '#1E264E', fontWeight: 'bold', marginBottom: 16 }}>
						Категории товаров
					</p>
					<Row xs={2} md={5}>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										alt="sale"
										src={require('../assets/icons/sale.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Акции и скидки
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										alt="vodka"
										src={require('../assets/icons/vodka.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Водка
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										alt="beer"
										src={require('../assets/icons/beer.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Пиво
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={140}
										height={142}
										alt="wine"
										src={require('../assets/icons/wine.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Вино
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={140}
										height={142}
										alt="coqnac"
										src={require('../assets/icons/cognac.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Коньяк
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="whiskey"
										src={require('../assets/icons/whiskey.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Виски
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="champagne"
										src={require('../assets/icons/champagne.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Шампанское
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="rum"
										src={require('../assets/icons/rum.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Ром
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="liquor"
										src={require('../assets/icons/liquor.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Ликер
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="snack"
										src={require('../assets/icons/snack.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Закуски
									</Card.Body>
								</Card>
							</a>
						</Col>
					</Row>
				</div>
				<Row
					xs={1}
					md={5}
					style={{
						bottom: 0,
						backgroundColor: 'white',
						margin: 0,
						alignSelf: 'flex-end',
						position: 'fixed',
						width: '100%',
						height: 173,
						padding: 10,
						paddingLeft: 40,
						paddingRight: 40,
					}}
					className="footer"
				>
					<Col>
						<img
							src={require('../assets/icons/logo.png')}
							alt="Logo"
							style={{ height: 32, marginBottom: 10 }}
						/>
						<Form
							style={{
								backgroundColor: '#F3F6F7',
								borderRadius: 8,
								height: 32,
								borderWidth: 0,
								marginBottom: 10,
							}}
						>
							<Form.Group>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text
											style={{
												backgroundColor: '#F3F6F7',
												borderWidth: 0,
												borderRadius: 8,
												paddingRight: 6,
											}}
										>
											<img
												src={require('../assets/icons/search.png')}
												alt="Search"
												style={{ width: 16, height: 16, marginTop: 3 }}
											/>
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										type="text"
										placeholder="поиск"
										style={{
											backgroundColor: '#F3F6F7',
											borderTopRightRadius: 8,
											borderBottomRightRadius: 8,
											height: 32,
											borderWidth: 0,
											paddingLeft: 0,
											width: 500,
											marginTop: -31,
											marginLeft: 35,
										}}
									/>
								</InputGroup>
							</Form.Group>
						</Form>
						<Row noGutters={true}>
							<Col md="2" sm="2">
								<p style={{ color: '#FF4C4B', fontSize: 24 }}>18+</p>
							</Col>
							<Col md="10" sm="10">
								<p style={{ fonsize: 13, color: '#5E697F' }}>
									Мы не доставляем алкогольную продукцию людям младше 18 лет
								</p>
							</Col>
						</Row>
					</Col>
					<Col>
						<a href="/Catalog">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Виски</p>
						</a>
						<a href="/Catalog">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Водка</p>
						</a>
						<a href="/Catalog">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Пиво</p>
						</a>
						<a href="/Catalog">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Вино</p>
						</a>
					</Col>
					<Col>
						<a href="/Catalog">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Коньяк</p>
						</a>
						<a href="/Catalog">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Шампанское</p>
						</a>
						<a href="/Catalog">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Ром</p>
						</a>
						<a href="/Catalog">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Ликеры</p>
						</a>
					</Col>
					<Col>
						<a href="/Profile">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Вход\регистрация</p>
						</a>
						<a href="/Profile">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Мой профиль</p>
						</a>
						<a href="/Basket">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Корзина</p>
						</a>
						<a href="/FriendShip">
							<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Предложения</p>
						</a>
					</Col>
					<Col>
						<Row style={{ marginBottom: 0 }}>
							<img
								src={require('../assets/icons/phone.png')}
								alt="Phone"
								style={{ height: 10, width: 10, marginTop: 3, marginRight: 6 }}
							/>
							<StyledHeading>8 800 112 02 99</StyledHeading>
							<StyledHeading1> с 11:00 до 20:00</StyledHeading1>
						</Row>
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>newsite@gmail.com</p>
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>
							115280, Москва, ул. Ленинская, 14 47
						</p>
						<Row style={{ marginBottom: 0, marginLeft: 0 }}>
							<img
								src={require('../assets/icons/telegram.png')}
								alt="telegram"
								style={{ height: 20, width: 20, marginTop: 3, marginRight: 10 }}
							/>
							<img
								src={require('../assets/icons/instagram.png')}
								alt="instagram"
								style={{ height: 20, width: 20, marginTop: 3, marginRight: 10 }}
							/>
							<img
								src={require('../assets/icons/facebook.png')}
								alt="facebook"
								style={{ height: 20, width: 20, marginTop: 3, marginRight: 10 }}
							/>
							<img
								src={require('../assets/icons/twitter.png')}
								alt="twitter"
								style={{ height: 20, width: 20, marginTop: 3, marginRight: 10 }}
							/>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Main;
