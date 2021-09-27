import React, { useState } from 'react';
import './Product.css';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart, AiOutlineTrophy,} from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { IoReturnDownBack,IoMedalOutline } from "react-icons/io5";
import { BiCheckShield, BiMedal } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { RiTimerLine } from "react-icons/ri";

export default function Product() {

    return (
        <section className="product">
            <div className="product-up">
                <p className="product-up-item-first">Voltar à lista</p> <p className="broke">|</p>
                <p className="product-up-item">Instrumentos Músicais</p><IoIosArrowForward size={10} className="product-up-icon"/>
                <p className="product-up-item">Instrumentos de Corda</p><IoIosArrowForward size={10} className="product-up-icon"/>
                <p className="product-up-item">Guitarra</p><IoIosArrowForward size={10} className="product-up-icon"/>
                <p className="product-up-item">Kits Guitarras y Amplificador</p>
                <div className="product-up-right">
                    <p className="product-up-item">Compartilhar</p>    
                    <p className="broke">|</p>
                    <p className="product-up-item">Vender um igual</p>
                </div>
            </div>
        <div className="product-mid">
            <div className="left-content">
                <div className="images-content">
                    <div className="left-images">
                        <div className="left-image"></div>
                        <div className="left-image"></div>
                        <div className="left-image"></div>
                        <div className="left-image"></div>
                    </div>
                    <div className="active-image"></div>
                </div>
                <div className="more-products">
                    <h1>Mais anúncios de Monumental Music</h1>
                    <div className="more-products-items">
                        <div className="more-products-item">
                            <img src="https://cdn.pixabay.com/photo/2013/07/12/15/06/guitar-149427_960_720.png" alt="" height="250px" width="200px"/>
                            <div className="text-more">
                                <p className="price-more">R$980</p>
                                <p className="green-more">12x RS81 sem juros</p>
                                <p className="green-more">frete grátis</p>
                                <p className="description-more">Kit Guitarra Waldman + Capa + Correira + Cabo + Ampli Sheldon</p>
                            </div>
                        </div>
                        <div className="more-products-item">
                            <img src="https://cdn.pixabay.com/photo/2013/07/12/15/06/guitar-149427_960_720.png" alt="" height="250px" width="200px"/>
                            <div className="text-more">
                                <p className="price-more">R$980</p>
                                <p className="green-more">12x RS81 sem juros</p>
                                <p className="green-more">frete grátis</p>
                                <p className="description-more">Kit Guitarra Waldman + Capa + Correira + Cabo + Ampli Sheldon</p>
                            </div>
                        </div>
                        <div className="more-products-item">
                            <img src="https://cdn.pixabay.com/photo/2013/07/12/15/06/guitar-149427_960_720.png" alt="" height="250px" width="200px"/>
                            <div className="text-more">
                                <p className="price-more">R$980</p>
                                <p className="green-more">12x RS81 sem juros</p>
                                <p className="green-more">frete grátis</p>
                                <p className="description-more">Kit Guitarra Waldman + Capa + Correira + Cabo + Ampli Sheldon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-right">
                <div className="product-right-item">
                    <div className="new-sold">
                        <p>Novo</p><p className="broke">|</p><p>5 vendidos</p>
                    </div>
                    <div className="name-and-heart">
                        <h3 className="product-name">Violão Clássico + Palhetas + Kit de Cordas</h3>
                        <div className="product-heart"></div>
                        <AiOutlineHeart size={25} color="#438cfa" className="product-heart"/>
                    </div>
                    <div className="price">
                        <h2 className="price-text">R$ 200</h2>
                        <div className="price-description">
                            <p>em </p> <p>12x R$57²² sem juros</p>
                        </div>
                        <a className="blue-text">Ver os meios de pagamento</a>
                    </div>
                    <div className="freight">
                        <div className="freight-icon">
                            <FiTruck size={22}/>
                            <p>Frete grátis</p>
                        </div>
                        <div className="deadlines">
                            <p className="gray-description">Siaba os prazos de entrega e as formas de envio.</p>
                            <a className="blue-text">Calcular o prazo de entrega</a>
                        </div>
                    </div>
                    <div className="availability">
                        <p className="orange">Disponível 3 dias após sua compra</p>
                        <div className="amount">
                            <p>Quantidade: </p> <ul>1 unidade</ul><IoIosArrowDown size={15} color="#5497fb" className="arrow-padding"/> <p>(9 disponíveis)</p>
                        </div>
                    </div>
                    <div className="buttons">
                            <button className="button button-primary">Comprar agora</button>
                            <button className="button button-secondary">Adicionar ao carrinho</button>
                    </div>
                    <div className="devolution-and-points">
                        <div className="item-devolution">
                            <IoReturnDownBack size={30} className="devolutions-icons"/>
                            <p><span>Devolução grátis.</span> Você tem 30 dias a partir da data de recebimento.</p>
                        </div>
                        <div className="item-devolution">
                            <BiCheckShield size={30} className="devolutions-icons"/>
                            <p><span>Compra Garantida</span>, receba o produto que está esperando ou devolvemos o dinheiro.</p>
                        </div>
                        <div className="item-devolution">
                            <AiOutlineTrophy size={20} className="devolutions-icons"/>
                            <p><span>Mercado Pontos</span>. Você acumula 230 pontos.</p>
                        </div>
                        <div className="item-devolution">
                            <BiMedal size={20} className="devolutions-icons"/>
                            <p>90 dias de garantia de fábrica.</p>
                        </div>
                    </div>
                </div>   
                <div className="product-right-item">
                    <div className="enterprise-title">
                        <h1>Informações da loja</h1>

                        <div className="monumental-music">
                            <div className="red-div"></div>
                            <div className="text-monumental-music">
                                <p>Monumental Music</p>
                                <p>Loja oficial no Mercado Livre</p>
                            </div>
                        </div>
                    </div>
                    <div className="icon-mercado-platinum">
                    <IoMedalOutline size={20} className="icon-medal-green"/>
                        <div className="text-mercadolider">
                            <p>MercadoLíder Platinum</p>
                            <p>É um dos melhores do site!</p>
                        </div>
                    </div>
                    <div className="group-bars">
                        <div className="red-bar"></div>
                        <div className="yellow-bar"></div>
                        <div className="yellow2-bar"></div>
                        <div className="yellow3-bar"></div>
                        <div className="green-bar"></div>
                    </div>

                    <div className="sold-by-day">
                        <div className="sold-item">
                            <h1>12030</h1>
                            <p>Vendas nos<br/> últimos 60 dias</p>
                        </div>
                        <div className="sold-item">
                        <GoComment size={30} className="icon-sold-item"/>
                        <p>Presta bom atendimento</p>
                        </div>
                        <div className="sold-item">
                        <RiTimerLine size={30} className="icon-sold-item"/>
                        <p className="delivery-last">Entrega os<br/> produtos dentro<br/> do prazo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </section>
    )
}
