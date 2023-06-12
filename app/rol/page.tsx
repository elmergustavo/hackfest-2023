import React from 'react'
import lana from "../resources/images/lana.png";
import dog_one from "../resources/images/dog_one.png";
import dog_two from "../resources/images/dog_two.png";
import icon_button from "../resources/images/Icon_button.png";
export default function page() {
  return (
    <section className=''>

        <div className='class-rol-title'>
            <div className='class-rol-title-img'>
                <h1>Escoge tu rol a adoptar</h1>
                <img src={lana.src} alt="" />
            </div>
                <p>
                ¿Eres una persona que tiene el deseo de darle la bienvenida a una almita muy especial o eres una persona que sabe de un almita que lo necesita?
                </p>
        </div>
        <div className='class-role-section'>
                <a className='class-role-section-one'>
                        <div className='class-role-title'>
                        <p><strong>Quiero</strong></p>
                        <p><strong>adoptar</strong></p>
                        </div>
                        <img src={dog_one.src} alt="" />
                </a>
                <a className='class-role-section-one'>
                        <div className='class-role-title'>
                        <p><strong>Quiero dar</strong></p>
                        <p><strong>en adopción</strong></p>
                        </div>
                        <img src={dog_two.src} alt="" />
                </a>

        </div>
        <div className='class-footer-rol'>
                <a className='title-back'>
                    <p>Ir al paso anterior</p>
                </a>
                <a className='next-img'>
                    <img src={icon_button.src} alt="" />
                </a>
        </div>
    </section>
  )
}
