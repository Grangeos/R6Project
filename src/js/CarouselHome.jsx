import React, { Component } from 'react';
import { Carousel, Caption, Item } from 'react-bootstrap';
import sombra from '../scss/picture/Sombra/sombra.jpg';
import chopper from '../scss/picture/chopper.jpg';
import mccree from '../scss/picture/McCree/mccree.jpg';
import lucio from '../scss/picture/Lucio/lucio.jpg';
import junkrat from '../scss/picture/Junkrat/junkrat.jpg';
import reaper from '../scss/picture/Reaper/reaper.jpg';
import mei from '../scss/picture/Mei/mei.jpg';
import hanzo from '../scss/picture/Hanzo/hanzo.png';
import mercy from '../scss/picture/Mercy/mercy.jpg';
import doomfist from '../scss/picture/Doomfist/doomfist.jpg';
import genji from '../scss/picture/Genji/genji.jpg';
import pharah from '../scss/picture/Pharah/pharah.jpg';
import soldier from '../scss/picture/Soldier/soldier.jpg';
import bastion from '../scss/picture/Bastion/bastion.jpg';
import torbjorn from '../scss/picture/Torbjorn/torbjorn.png';
import leftRight from "../scss/picture/arrow.png";

class CarouselHome extends Component {
    render() {
        return(
            <section>
                <Carousel className="carouselHome"
                interval={5000}
                pauseOnHover={false}
                prevIcon={<img src={leftRight} />}
                nextIcon={<img src={leftRight} />}
                >
                    <Carousel.Item style={{backgroundImage:`url(${sombra})`}}>
                        <Carousel.Caption>
                            <h3>Sombra</h3>
                            <p>Edited by Grangeos</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${chopper})`}}>
                        <Carousel.Caption>
                            <h3>Chopper</h3>
                            <p>Edited by Tibomat</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${mccree})`}}>
                        <Carousel.Caption>
                            <h3>McCree</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${junkrat})`}}>
                        <Carousel.Caption>
                            <h3>Chacal</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${lucio})`}}>
                        <Carousel.Caption>
                            <h3>Lucio</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${reaper})`}}>
                        <Carousel.Caption>
                            <h3>Faucheur</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${hanzo})`}}>
                        <Carousel.Caption>
                            <h3>Hanzo</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${mei})`}}>
                        <Carousel.Caption>
                            <h3>Mei</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${mercy})`}}>
                        <Carousel.Caption>
                            <h3>Ange</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${doomfist})`}}>
                        <Carousel.Caption>
                            <h3>Doomfist</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${genji})`}}>
                      <Carousel.Caption>
                       <h3>Genji</h3>
                       <p>Edited by NeiiKo</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  <Carousel.Item style={{backgroundImage:`url(${pharah})`}}>
                        <Carousel.Caption>
                            <h3>Pharah</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                  <Carousel.Item style={{backgroundImage:`url(${bastion})`}}>
                          <Carousel.Caption>
                              <h3>Bastion</h3>
                              <p>Edited by NeiiKo</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${torbjorn})`}}>
                          <Carousel.Caption>
                              <h3>Torbjorn</h3>
                              <p>Edited by NeiiKo</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                      
                </Carousel>
            </section>

        );
    }
}

export default CarouselHome;
