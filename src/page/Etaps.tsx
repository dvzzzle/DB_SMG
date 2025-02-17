import { useRef } from 'react';
import React from "react";
import "./index.css";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperRef } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

const Etaps = ()=> {

  const swiperRef = useRef<SwiperRef | null>(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };


  return (
    <div className="main-container w-[1920px] h-[2559px] bg-[#f1f3f7] relative mx-auto my-0">
      <div className="flex w-[336px] flex-col gap-[24px] items-start flex-nowrap relative mt-[141px] mr-0 mb-0 ml-[135px]">
        <a href="/dashboard" className="h-[13px] self-stretch shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#c00000] relative text-left whitespace-nowrap z-[1]">
          Назад
        </a>
        <span className="flex w-[336px] h-[25px] justify-center items-start shrink-0 font-['Golos_Text'] text-[36px] font-semibold leading-[25px] text-[#161616] relative text-center whitespace-nowrap z-[2]">
          Этапы реализации
        </span>
      </div>
      
      <div className="flex max-w-[1800px] h-[193px] relative items-start z-[402] mt-[64px] mr-0 mb-0 ml-0">
        <div className="flex w-[9.5px] h-[27px] justify-center items-center flex-nowrap bg-[url(../assets/images/054f5ae5-c140-41c8-8638-824215c6f4c7.png)] bg-cover bg-no-repeat relative left-[60px] top-[45%] z-[600]" onClick={handleNextSlide}/>
        <Swiper
          onSwiper={(swiper: SwiperRef) => (swiperRef.current = swiper)}
          className="flex w-[1800px] h-[193px] items-center flex-nowrap absolute top-0 left-[84px] overflow-hidden z-[403]"
          slidesPerView={5}
          spaceBetween={50}
          loop={true}
          modules={[Navigation]}
        >
          <SwiperSlide className="flex w-[320px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 border-[#c00000] relative z-[405]">
            <div>
              <span className="flex w-[248px] h-[58px] justify-start items-center self-stretch shrink-0 font-['Inter'] text-[24px] font-medium leading-[29.045px] text-[#161616] relative text-left z-[406]">
                Устройство инженерных систем
              </span>
              <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[407]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[408]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[409]">
                    План
                  </span>
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[410]">
                    06.12.24
                  </span>
                </div>
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[411]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[412]">
                    Факт
                  </span>
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[413]">
                    -
                  </span>
                </div>
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[414]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[415]">
                    Исполнитель
                  </span>
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[416]">
                    ООО "ГП-МФС"
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[9.5px] h-[27px] bg-[url(../assets/images/054f5ae5-c140-41c8-8638-824215c6f4c7.png)] absolute bg-cover bg-no-repeat top-[45%] -right-[30px] z-[404]" />
          </SwiperSlide>
          <SwiperSlide className="flex w-[304px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 border-[#bf9000] relative z-[418]">
            <span className="flex w-[199px] h-[58px] justify-start items-center shrink-0 font-['Inter'] text-[24px] font-medium leading-[29.045px] text-[#161616] relative text-left z-[419]">
              Отделочные работы
            </span>
            <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[420]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[421]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[422]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[423]">
                  20.12.24
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[424]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[425]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[426]">
                  -
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[427]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[428]">
                  Исполнитель
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[429]">
                  ООО "ГП-МФС"
                </span>
              </div>
            </div>
            <div className="w-[9.5px] h-[27px] bg-[url(../assets/images/054f5ae5-c140-41c8-8638-824215c6f4c7.png)] absolute bg-cover bg-no-repeat top-[45%] -right-[30px] z-[404]" />
          </SwiperSlide>
          <SwiperSlide className="flex w-[304px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 border-[#bf9000] relative z-[431]">
            <span className="flex w-[232px] h-[58px] justify-start items-center self-stretch shrink-0 font-['Inter'] text-[24px] font-medium leading-[29.045px] text-[#161616] relative text-left z-[432]">
              Благоустройство территории
            </span>
            <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[433]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[434]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[435]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[436]">
                  26.12.24
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[437]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[438]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[439]">
                  -
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[440]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[441]">
                  Исполнитель
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[442]">
                  ООО "ГП-МФС"
                </span>
              </div>
            </div>
            <div className="w-[9.5px] h-[27px] bg-[url(../assets/images/054f5ae5-c140-41c8-8638-824215c6f4c7.png)] absolute bg-cover bg-no-repeat top-[45%] -right-[30px] z-[404]" />
          </SwiperSlide>
          <SwiperSlide className="flex w-[328px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 border-[#bf9000] relative z-[444]">
            <span className="flex w-[256px] h-[58px] justify-start items-center self-stretch shrink-0 font-['Inter'] text-[24px] font-medium leading-[29.045px] text-[#161616] relative text-left z-[445]">
              Получение ЗОС
            </span>
            <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[446]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[447]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[448]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[449]">
                  24.12.24
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[450]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[451]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[452]">
                  -
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[453]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[454]">
                  Исполнитель
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[455]">
                  МГСН
                </span>
              </div>
            </div>
            <div className="w-[9.5px] h-[27px] bg-[url(../assets/images/054f5ae5-c140-41c8-8638-824215c6f4c7.png)] absolute bg-cover bg-no-repeat top-[45%] -right-[30px] z-[404]" />
          </SwiperSlide>
          <SwiperSlide className="flex w-[306px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 border-[#bf9000] relative z-[457]">
            <span className="flex w-[234px] h-[58px] justify-start items-center self-stretch shrink-0 font-['Inter'] text-[24px] font-medium leading-[29.045px] text-[#161616] relative text-left z-[458]">
              Получение РВ
            </span>
            <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[459]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[460]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[461]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[462]">
                  30.12.24
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[463]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[464]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[465]">
                  -
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[466]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[467]">
                  Исполнитель
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[468]">
                  МГСН
                </span>
              </div>
            </div>
            <div className="w-[9.5px] h-[27px] bg-[url(../assets/images/054f5ae5-c140-41c8-8638-824215c6f4c7.png)] absolute bg-cover bg-no-repeat top-[45%] -right-[30px] z-[404]" />
          </SwiperSlide>
          <SwiperSlide className="flex w-[306px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 border-[#bf9000] relative z-[457]">
            <span className="flex w-[234px] h-[58px] justify-start items-center self-stretch shrink-0 font-['Inter'] text-[24px] font-medium leading-[29.045px] text-[#161616] relative text-left z-[458]">
              Получение РВ
            </span>
            <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[459]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[460]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[461]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[462]">
                  30.12.24
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[463]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[464]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[465]">
                  -
                </span>
              </div>
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[466]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[467]">
                  Исполнитель
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[468]">
                  МГСН
                </span>
              </div>
            </div>
            <div className="w-[9.5px] h-[27px] bg-[url(../assets/images/054f5ae5-c140-41c8-8638-824215c6f4c7.png)] absolute bg-cover bg-no-repeat top-[45%] -right-[30px] z-[404]" />
          </SwiperSlide>
        </Swiper>
        <div className="flex w-[9.5px] h-[27px] justify-center items-center flex-nowrap bg-[url(../assets/images/054f5ae5-c140-41c8-8638-824215c6f4c7.png)] bg-cover bg-no-repeat relative left-[100px] top-[45%] z-[600]" onClick={handleNextSlide}/>
      </div>
      <div className="flex w-[1650px] h-[29px] justify-between items-start flex-nowrap relative z-[4] mt-[64px] mr-0 mb-0 ml-[135px]">
        <div className="flex w-[137px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[5]">
          <span className="h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#161616] relative text-left whitespace-nowrap z-[6]">
            В работе
          </span>
          <span className="h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#161616] relative text-left whitespace-nowrap z-[7]">
            8
          </span>
        </div>
        <div className="flex w-[164px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[8]">
          <span className="h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#161616] relative text-left whitespace-nowrap z-[9]">
            Все этапы
          </span>
          <span className="h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#161616] relative text-left whitespace-nowrap z-10">
            19
          </span>
        </div>
      </div>
      <div className="flex w-[1650px] flex-col gap-[36px] items-start flex-nowrap relative z-[11] mt-[36px] mr-0 mb-0 ml-[135px]">
        <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[12]">
          <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#f8e4e4] rounded-[8px] border-solid border border-[#c00000] relative z-[13]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[14]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[15]">
                Устройство надземной части
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[16]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[17]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[18]">
                  Исполнитель
                </span>
                <span className="flex w-[127px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[19]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-20">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[21]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[22]">
                  04.10.24
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[23]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[24]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[25]">
                  -
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[26]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[27]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[28]">
                  77%
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#f8e4e4] rounded-[8px] border-solid border border-[#c00000] relative z-[29]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-30">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[31]">
                Устройство инженерных систем
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[32]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[33]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[34]">
                  Исполнитель
                </span>
                <span className="flex w-[127px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[35]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[36]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[37]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[38]">
                  06.12.24
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[39]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-40">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[41]">
                  -
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[42]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[43]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[44]">
                  77%
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff7e0] rounded-[8px] border-solid border border-[#bf9000] relative z-[45]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[46]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[47]">
                Отделочные работы
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[48]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[49]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-50">
                  Исполнитель
                </span>
                <span className="flex w-[127px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[51]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[52]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[53]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[54]">
                  20.12.24
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[55]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[56]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[57]">
                  -
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[58]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[59]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[60]">
                  50%
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff7e0] rounded-[8px] border-solid border border-[#bf9000] relative z-[61]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[62]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[63]">
                Благоустройство территории
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[64]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[65]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[66]">
                  Исполнитель
                </span>
                <span className="flex w-[127px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[67]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[68]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[69]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[70]">
                  26.12.24
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[71]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[72]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[73]">
                  -
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[74]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[75]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[76]">
                  77%
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff7e0] rounded-[8px] border-solid border border-[#bf9000] relative z-[77]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[78]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[79]">
                Получение ЗОС
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[80]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[81]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[82]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[83]">
                  МГСН
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[84]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[85]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[86]">
                  24.12.24
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[87]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[88]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[89]">
                  -
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[90]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[91]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[92]">
                  60%
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff7e0] rounded-[8px] border-solid border border-[#bf9000] relative z-[93]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[94]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[95]">
                Получение РВ
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[96]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[97]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[98]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[99]">
                  МГСН
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[100]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[101]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[102]">
                  30.12.24
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[103]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[104]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[105]">
                  -
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[106]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[107]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[108]">
                  60%
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#dadada] relative z-[109]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[110]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[111]">
                Постановка на кадастровый учет
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[112]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[113]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[114]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[115]">
                  ДГИ
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[116]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[117]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[118]">
                  10.01.25
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[119]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[120]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[121]">
                  -
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[122]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[123]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[124]">
                  0%
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#dadada] relative z-[125]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[126]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[127]">
                Передача под заселение
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[128]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[129]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[130]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[131]">
                  ДГИ
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[132]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[133]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[134]">
                  25.07.25
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[135]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[136]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[137]">
                  -
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[138]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[139]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[140]">
                  0%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[173px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[141]">
          <span className="h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#161616] relative text-left whitespace-nowrap z-[142]">
            Выполнено
          </span>
          <span className="h-[29px] shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#161616] relative text-left whitespace-nowrap z-[143]">
            11
          </span>
        </div>
        <div className="h-[1156px] self-stretch shrink-0 relative z-[144]">
          <div className="flex w-[1650px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] flex-col gap-[10px] items-start flex-nowrap bg-[#ebfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[145] mt-0 mr-0 mb-0 ml-0">
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[146]">
              <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[147]">
                <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[148]">
                  ППМ (708-ПП/ППТ)
                </span>
              </div>
              <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[149]">
                <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[150]">
                  <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[151]">
                    Исполнитель
                  </span>
                  <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[152]">
                    ДГП
                  </span>
                </div>
                <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[153]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[154]">
                    План
                  </span>
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[155]">
                    25.12.19
                  </span>
                </div>
                <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[156]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[157]">
                    Факт
                  </span>
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[158]">
                    25.12.19
                  </span>
                </div>
                <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[159]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[160]">
                    Выполнение
                  </span>
                  <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[161]">
                    100%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ecfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[162] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[163]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[164]">
                Получение ГПЗУ
              </span>
            </div>
            <div className="flex w-[687px] gap-[21px] items-start shrink-0 flex-nowrap relative z-[165]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[166]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[167]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[168]">
                  МКА
                </span>
              </div>
              <div className="flex w-[121px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[169]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[170]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[171]">
                  29.09.20
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[172]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[173]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[174]">
                  29.09.20
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[175]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[176]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[177]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1620px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#f4fff8] rounded-[8px] border-solid border border-[#00863d] relative z-[178] mt-[12px] mr-0 mb-0 ml-[30px]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[179]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-normal leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[180]">
                Подача заявки
              </span>
            </div>
            <div className="flex w-[687px] gap-[21px] items-start shrink-0 flex-nowrap relative z-[181]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[182]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[183]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[184]">
                  МКА
                </span>
              </div>
              <div className="flex w-[117px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[185]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[186]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[187]">
                  29.09.20
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[188]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[189]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[190]">
                  29.09.20
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[191]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[192]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[193]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1620px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#f4fff8] rounded-[8px] border-solid border border-[#00863d] relative z-[194] mt-[12px] mr-0 mb-0 ml-[30px]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[195]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-normal leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[196]">
                Выдача ГПЗУ
              </span>
            </div>
            <div className="flex w-[687px] gap-[21px] items-start shrink-0 flex-nowrap relative z-[197]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[198]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[199]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[200]">
                  МКА
                </span>
              </div>
              <div className="flex w-[117px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[201]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[202]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[203]">
                  29.09.20
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[204]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[205]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[206]">
                  29.09.20
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[207]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[208]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[209]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ebfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[210] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[211]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[212]">
                Разработка и согласование ТЗ
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[213]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[214]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[215]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[216]">
                  ДГС
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[217]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[218]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[219]">
                  15.04.20
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[220]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[221]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[222]">
                  15.04.20
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[223]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[224]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[225]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ebfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[226] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[227]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[228]">
                Разработка и согласование квартирографии
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[229]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[230]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[231]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[232]">
                  ДГП
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[233]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[234]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[235]">
                  07.01.21
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[236]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[237]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[238]">
                  07.01.21
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[239]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[240]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[241]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ebfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[242] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[243]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[244]">
                Проведение конкурсных процедур и подписание договора
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[245]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[246]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[247]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[248]">
                  МКЭ
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[249]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[250]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[251]">
                  14.07.21
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[252]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[253]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[254]">
                  14.07.21
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[255]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[256]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[257]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ebfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[258] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[259]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[260]">
                Разработка и согласование АПР
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[261]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[262]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[263]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[264]">
                  МКА
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[265]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[266]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[267]">
                  03.02.23
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[268]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[269]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[270]">
                  03.02.23
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[271]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[272]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[273]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ebfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[274] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[275]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[276]">
                Разработка и согласование АГР
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[277]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[278]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[279]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[280]">
                  МКА
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[281]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[282]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[283]">
                  17.02.23
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[284]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[285]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[286]">
                  17.02.23
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[287]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[288]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[289]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1620px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#f4fff9] rounded-[8px] border-solid border border-[#00863d] relative z-[290] mt-[12px] mr-0 mb-0 ml-[30px]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[291]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[292]">
                Разработка АГР
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[293]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[294]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[295]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[296]">
                  МКА
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[297]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[298]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[299]">
                  17.02.23
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[300]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[301]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[302]">
                  17.02.23
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[303]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[304]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[305]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1620px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#f4fff9] rounded-[8px] border-solid border border-[#00863d] relative z-[306] mt-[12px] mr-0 mb-0 ml-[30px]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[307]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[308]">
                Подача заявки на согласование
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[309]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[310]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[311]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[312]">
                  МКА
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[313]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[314]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[315]">
                  17.02.23
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[316]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[317]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[318]">
                  17.02.23
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[319]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[320]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[321]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1620px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#f4fff9] rounded-[8px] border-solid border border-[#00863d] relative z-[322] mt-[12px] mr-0 mb-0 ml-[30px]">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[323]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[324]">
                Выдача согласования
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[325]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[326]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[327]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[328]">
                  МКА
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[329]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[330]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[331]">
                  17.02.23
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[332]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[333]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[334]">
                  17.02.23
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[335]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[336]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[337]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ecfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[338] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[339]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[340]">
                Договор ТП
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[341]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[342]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[343]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[344]">
                  РСО
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[345]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[346]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[347]">
                  24.04.23
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[348]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[349]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[350]">
                  24.04.23
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[351]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[352]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[353]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#f8e4e4] rounded-[8px] border-solid border border-[#c00000] relative z-[354] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[355]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[356]">
                Получение заключения МГЭ
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[357]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[358]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[359]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[360]">
                  МГЭ
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[361]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[362]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[363]">
                  19.05.23
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[364]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[365]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#000] relative text-left whitespace-nowrap z-[366]">
                  02.06.23
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[367]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[368]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[369]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ecfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[370] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[371]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[372]">
                Получение разрешения на строительство
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[373]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[374]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[375]">
                  Исполнитель
                </span>
                <span className="flex w-[91px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[376]">
                  МГСН
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[377]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[378]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[379]">
                  30.06.23
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[380]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[381]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[382]">
                  30.06.23
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[383]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[384]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[385]">
                  100%
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1650px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center flex-nowrap bg-[#ecfff4] rounded-[8px] border-solid border border-[#00863d] relative z-[386] mt-[12px] mr-0 mb-0 ml-0">
            <div className="flex w-[737px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[387]">
              <span className="flex w-[737px] h-[29px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[29px] text-[#000] relative text-left whitespace-nowrap z-[388]">
                Устройство подземной части
              </span>
            </div>
            <div className="flex w-[687px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[389]">
              <div className="flex w-[245px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[390]">
                <span className="flex w-[110px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[391]">
                  Исполнитель
                </span>
                <span className="flex w-[127px] h-[19px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[392]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[393]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[394]">
                  План
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[395]">
                  21.05.24
                </span>
              </div>
              <div className="flex w-[111px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[396]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[397]">
                  Факт
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[398]">
                  21.05.24
                </span>
              </div>
              <div className="flex w-[148px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[399]">
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[400]">
                  Выполнение
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[401]">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Etaps;