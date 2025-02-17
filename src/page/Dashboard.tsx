import { useState } from 'react';
import { useRef } from 'react';
import React from "react";
import "./index.css";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperRef } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

import House11 from '../assets/images/House1-1.jpg';
import House12 from '../assets/images/House1-2.jpg';
import House13 from '../assets/images/House1-3.jpg';
import House14 from '../assets/images/House1-4.jpg';
import House21 from '../assets/images/House2-1.jpg';
import House22 from '../assets/images/House2-2.jpg';
import House23 from '../assets/images/House2-3.jpg';
import House24 from '../assets/images/House2-4.jpg';

const Dashboard = () => {

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

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const [activeButton, setActiveButton] = useState("customer");

  const [selectedImage, setSelectedImage1] = useState<string>(House11);
  const [activeIndex, setActiveIndex1] = useState<number>(0);

  const [selectedImage2, setSelectedImage2] = useState<string>(House21);
  const [activeIndex2, setActiveIndex2] = useState<number>(0);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage1(image);
    setActiveIndex1(index);
  };

  const handleImageClick2 = (image: string, index: number) => {
    setSelectedImage2(image);
    setActiveIndex2(index);
  };

  return (
    <div className="main-container w-[1920px] h-auto text-[0px] bg-[#f1f3f7] rounded-[16px] relative overflow-hidden mx-auto my-0 pb-14">
      <a href="/listing" className="block h-[13px] font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#c00000] relative text-left whitespace-nowrap z-[457] mt-[148px] mr-0 mb-0 ml-[116px] cursor-pointer w-min">
        Назад в Реестр объектов
      </a>
      <div className="flex w-[1699px] h-[161px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[16px] justify-center items-start flex-nowrap bg-[#fff] rounded-[12px] relative shadow-[0_10px_50px_0_#d2d4d8] mt-[24px] mr-0 mb-0 ml-[111px]">
        <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
            <div className="flex w-[517px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[3]">
              <span className="h-[21px] shrink-0 basis-auto font-['Golos_Text'] text-[30px] font-bold leading-[21px] text-[#161616] relative text-left whitespace-nowrap z-[4]">
                Жилой дом
              </span>
              <span className="flex w-[74px] h-[13px] justify-start items-start shrink-0 font-['Golos_Text'] text-[24px] font-normal leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[5]">
                ВАО
              </span>
              <button className="flex w-[138px] h-[25px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#f8e4e4] rounded-[7px] border-solid border border-[#c00000] relative z-[6] pointer">
                <span className="h-[11px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-semibold leading-[11px] text-[#c00000] relative text-left whitespace-nowrap z-[7]">
                  Срыв срока
                </span>
              </button>
              <button className="flex w-[159px] h-[25px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#f8e4e4] rounded-[7px] border-solid border border-[#c00000] relative z-[8] pointer">
                <span className="h-[11px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-semibold leading-[11px] text-[#c00000] relative text-left whitespace-nowrap z-[9]">
                  Высокий риск
                </span>
              </button>
            </div>
            <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-normal leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-10">
              Реновация
            </span>
          </div>
          <span className="flex w-[530px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-normal leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[11]">
            Амурская ул. уч. 1/19 (зоны 1.1, 1.2, 1.5)
          </span>
          <div className="flex w-[213px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[12]">
            <span className="h-[11px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[13]">
              УИН
            </span>
            <span className="h-[11px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-medium leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[14]">
              TT0000-99-7886-001
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[15]">
          <div className="flex w-[254px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[16]">
            <span className="h-[19px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[17]">
              Площадь объекта
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[18]">
              {" "}
              20549,94 м²
            </span>
          </div>
          <span className="h-[19px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-medium leading-[19px] text-[#c00000] relative text-left whitespace-nowrap z-[19] cursor-pointer">
            Ссылка на цифровой паспорт объекта
          </span>
        </div>
      </div>
      <div className={`flex w-[1697px] pt-[36px] pr-[10px] pb-[34px] pl-[36px] flex-col gap-[48px] items-start flex-nowrap bg-[#fff] rounded-[12px] relative z-[390] mt-[16px] mr-0 mb-0 ml-[111px] ${isExpanded ? 'h-auto' : 'h-[470px]'}`}>
        <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[391]">
          <div className="flex w-[1279px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[392]">
            <span className="flex w-[690px] h-[17px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[24px] font-semibold leading-[16px] text-[#161616] relative text-left whitespace-nowrap z-[393]">
              Причины срыва сроков и мероприятия по их устранению
            </span>
            <button className="flex w-[115px] h-[31px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[7px] border-solid border border-[#7d7d7d] relative z-[394] pointer">
              <span className="h-[11px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[395]">
                Всего
              </span>
              <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[396]">
                5
              </span>
            </button>
            <button className="flex w-[181px] h-[31px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[7px] border-solid border border-[#7d7d7d] relative z-[397] pointer">
              <span className="h-[11px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[398]">
                Не отработано
              </span>
              <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[399]">
                2
              </span>
            </button>
            <button className="flex w-[115px] h-[31px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[7px] border-solid border border-[#7d7d7d] relative z-[400] pointer">
              <span className="h-[11px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[401]">
                В работе
              </span>
              <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[402]">
                2
              </span>
            </button>
            <button className="flex w-[138px] h-[31px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[7px] border-solid border border-[#7d7d7d] relative z-[403] pointer">
              <span className="h-[11px] shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[404]">
                Выполнено
              </span>
              <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[405]">
                1
              </span>
            </button>
          </div>
          <div className="flex w-[53px] h-[32px] mr-[12px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[406]"onClick={() => setIsExpanded(!isExpanded)}onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') {setIsExpanded(!isExpanded);}}}>
            <div className={`w-[27px] h-[11px] shrink-0 bg-[url(../assets/images/599f00b9-d766-44d9-985f-51079ba1d336.png)] bg-cover bg-no-repeat relative z-[407] ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>
        <div className="flex w-[1625px] flex-col gap-[26px] items-start shrink-0 flex-nowrap relative z-[408]">
          <div className="flex w-[1625px] pt-0 pr-[24px] pb-0 pl-[24px] flex-col gap-[77px] items-start shrink-0 flex-nowrap rounded-[8px] relative z-[409]">
            <div className="flex w-[1585px] h-[38px] justify-between items-center shrink-0 flex-nowrap relative z-[410]">
              <div className="flex w-[180px] items-center shrink-0 flex-nowrap relative z-[411]">
                <span className="flex w-[180px] h-[13px] justify-start items-start shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[412]">
                  Этап работ
                </span>
              </div>
              <div className="flex w-[250px] h-[13px] items-center shrink-0 flex-nowrap relative z-[413]">
                <span className="flex w-[250px] h-[11px] justify-start items-start shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[414]">
                  Причина срыва сроков
                </span>
              </div>
              <div className="flex w-[300px] items-center shrink-0 flex-nowrap relative z-[415]">
                <span className="flex w-[300px] h-[13px] justify-start items-start shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[416]">
                  Мероприятия по устранению
                </span>
              </div>
              <div className="flex w-[200px] items-center shrink-0 flex-nowrap relative z-[417]">
                <span className="flex w-[200px] h-[13px] justify-start items-start shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[418]">
                  Исполнитель
                </span>
              </div>
              <div className="flex w-[290px] items-center shrink-0 flex-nowrap relative z-[419]">
                <span className="flex w-[278px] h-[13px] justify-start items-start shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[420]">
                  Предпринятые меры
                </span>
              </div>
              <div className="flex w-[100px] h-[38px] items-center shrink-0 flex-nowrap relative z-[421]">
                <span className="flex w-[106px] h-[38px] justify-start items-start shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[18px] text-[#161616] relative text-left z-[422]">
                  Срок устранения
                </span>
              </div>
              <div className="flex w-[120px] items-center shrink-0 flex-nowrap relative z-[423]">
                <span className="flex w-[120px] h-[13px] justify-start items-start shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[424]">
                  Статус
                </span>
              </div>
            </div>
          </div>
          <div className={`flex w-auto pt-0 pr-4 pl-0 flex-col justify-between items-start shrink-0 flex-nowrap rounded-[8px] relative z-[425] overflow-x-hidden gap-[20px] ${isExpanded ? 'h-auto pb-0' : 'h-[255px] pb-[0px]'}`}>
            <div className="flex w-[1625px] pt-[16px] pr-[16px] pb-[16px] pl-[24px] justify-between items-start shrink-0 flex-nowrap bg-[#f8e4e4] rounded-[8px] border-solid border border-[#c00000] relative z-[426]">
              <div className="flex w-[180px] h-[83px] items-center shrink-0 flex-nowrap relative z-[427]">
                <span className="flex w-[180px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[428]">
                  Устройство надземной части
                </span>
              </div>
              <div className="flex w-[250px] h-[83px] items-center shrink-0 flex-nowrap relative z-[429]">
                <span className="flex w-[250px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[430]">
                  Недостаточное кол-во рабочей силы при возведении внутренних
                  перегородок
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[431]">
                <span className="flex w-[300px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[432]">
                  Мобилизовать 100 человек
                </span>
              </div>
              <div className="flex w-[200px] h-[83px] items-center shrink-0 flex-nowrap relative z-[433]">
                <span className="flex w-[200px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[434]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[435]">
                <div className="w-[300px] shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] relative text-left z-[436]">
                  <span className="font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left">
                    04.10.2024 направлено предписание
                    <br />
                  </span>
                  <span className="font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#161616] relative text-left">
                    Статус претензионной работы: в
                  </span>
                  <span className="font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left">
                    {" "}
                    работе
                    <br />
                  </span>
                  <span className="font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#161616] relative text-left">
                    Сумма штрафа: 750 тыс. руб
                  </span>
                </div>
              </div>
              <div className="flex w-[100px] h-[83px] items-center shrink-0 flex-nowrap relative z-[437]">
                <span className="flex w-[100px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-semibold leading-[20px] text-[#c00000] relative text-left z-[438]">
                  04.11.2024
                </span>
              </div>
              <div className="flex w-[120px] h-[83px] items-center shrink-0 flex-nowrap relative z-[439]">
                <span className="flex w-[120px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[28px] text-[#161616] relative text-left z-[440]">
                  В работе
                </span>
              </div>
            </div>
            <div className="flex w-[1625px] pt-[16px] pr-[16px] pb-[16px] pl-[24px] justify-between items-start shrink-0 flex-nowrap bg-[#fff7e0] rounded-[8px] border-solid border border-[#bf9000] relative z-[441]">
              <div className="flex w-[180px] h-[83px] items-center shrink-0 flex-nowrap relative z-[442]">
                <span className="flex w-[180px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[443]">
                  Устройство инженерных систем
                </span>
              </div>
              <div className="flex w-[250px] h-[83px] items-center shrink-0 flex-nowrap relative z-[444]">
                <span className="flex w-[250px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[445]">
                  Аварийное состояние существующих трубопроводов тепловой сети
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[446]">
                <span className="flex w-[300px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[447]">
                  Проведение дополнительных работ по переустройству тепловых
                  сетей до безаварийного участка
                </span>
              </div>
              <div className="flex w-[200px] h-[83px] items-center shrink-0 flex-nowrap relative z-[448]">
                <span className="flex w-[200px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[449]">
                  РСО
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[450]">
                <span className="flex w-[300px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[451]">
                  Отсутствуют
                </span>
              </div>
              <div className="flex w-[100px] h-[83px] items-center shrink-0 flex-nowrap relative z-[452]">
                <span className="flex w-[100px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[453]">
                  20.12.2024
                </span>
              </div>
              <div className="flex w-[120px] h-[83px] items-center shrink-0 flex-nowrap relative z-[454]">
                <span className="flex w-[120px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[28px] text-[#161616] relative text-left z-[455]">
                  В работе
                </span>
              </div>
            </div>
            <div className="flex w-[1625px] pt-[16px] pr-[16px] pb-[16px] pl-[24px] justify-between items-start shrink-0 flex-nowrap bg-white rounded-[8px] border-solid border border-[#7D7D7D] relative z-[441]">
              <div className="flex w-[180px] h-[83px] items-center shrink-0 flex-nowrap relative z-[442]">
                <span className="flex w-[180px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[443]">
                  Отделочные работы
                </span>
              </div>
              <div className="flex w-[250px] h-[83px] items-center shrink-0 flex-nowrap relative z-[444]">
                <span className="flex w-[250px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[445]">
                  Низкие темпы работы
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[446]">
                <span className="flex w-[300px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[447]">
                  Мобилизовать 100 человек
                </span>
              </div>
              <div className="flex w-[200px] h-[83px] items-center shrink-0 flex-nowrap relative z-[448]">
                <span className="flex w-[200px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[449]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[450]">
                <span className="flex w-[300px] h-full justify-start items-center shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[451]">
                  20.12.2024 направлено предписание Статус претензионной работы: не начато
                </span>
              </div>
              <div className="flex w-[100px] h-[83px] items-center shrink-0 flex-nowrap relative z-[452]">
                <span className="flex w-[100px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[453]">
                  29.12.2024
                </span>
              </div>
              <div className="flex w-[120px] h-[83px] items-center shrink-0 flex-nowrap relative z-[454]">
                <span className="flex w-[120px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[28px] text-[#161616] relative text-left z-[455]">
                  Не отработано
                </span>
              </div>
            </div>
            <div className="flex w-[1625px] pt-[16px] pr-[16px] pb-[16px] pl-[24px] justify-between items-start shrink-0 flex-nowrap bg-white rounded-[8px] border-solid border border-[#7D7D7D] relative z-[441]">
              <div className="flex w-[180px] h-[83px] items-center shrink-0 flex-nowrap relative z-[442]">
                <span className="flex w-[180px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[443]">
                  Благоустройство территории
                </span>
              </div>
              <div className="flex w-[250px] h-[83px] items-center shrink-0 flex-nowrap relative z-[444]">
                <span className="flex w-[250px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[445]">
                  Невыполнение СМР в полном объеме для старта работ по благоустройству
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[446]">
                <span className="flex w-[300px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[447]">
                  Ускорить завершение предыдущих этапов реализации для выравнивания хода работ
                </span>
              </div>
              <div className="flex w-[200px] h-[83px] items-center shrink-0 flex-nowrap relative z-[448]">
                <span className="flex w-[200px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[449]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[450]">
                <span className="flex w-[300px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[451]">
                  Отсутствуют
                </span>
              </div>
              <div className="flex w-[100px] h-[83px] items-center shrink-0 flex-nowrap relative z-[452]">
                <span className="flex w-[100px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[453]">
                  29.12.2024
                </span>
              </div>
              <div className="flex w-[120px] h-[83px] items-center shrink-0 flex-nowrap relative z-[454]">
                <span className="flex w-[120px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[28px] text-[#161616] relative text-left z-[455]">
                  Не отработано
                </span>
              </div>
            </div>
            <div className="flex w-[1625px] pt-[16px] pr-[16px] pb-[16px] pl-[24px] justify-between items-start shrink-0 flex-nowrap bg-[#ECFFF5] rounded-[8px] border-solid border border-[#00863D] relative z-[441]">
              <div className="flex w-[180px] h-[83px] items-center shrink-0 flex-nowrap relative z-[442]">
                <span className="flex w-[180px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[443]">
                  Получение положительного заключения МГЭ
                </span>
              </div>
              <div className="flex w-[250px] h-[83px] items-center shrink-0 flex-nowrap relative z-[444]">
                <span className="flex w-[250px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[445]">
                  Задержка в согласовании проектной документации (снятие замечаний экспертизы)
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[446]">
                <span className="flex w-[300px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[447]">
                  Корректировка и повторное согласование проектной документации
                </span>
              </div>
              <div className="flex w-[200px] h-[83px] items-center shrink-0 flex-nowrap relative z-[448]">
                <span className="flex w-[200px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[16px] text-[#161616] relative text-left z-[449]">
                  ООО "ГП-МФС"
                </span>
              </div>
              <div className="flex w-[300px] h-[83px] items-center shrink-0 flex-nowrap relative z-[450]">
                <span className="flex w-[300px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[451]">
                  Отсутствуют
                </span>
              </div>
              <div className="flex w-[100px] h-[83px] items-center shrink-0 flex-nowrap relative z-[452]">
                <span className="flex w-[100px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[20px] text-[#000] relative text-left z-[453]">
                  02.06.2023
                </span>
              </div>
              <div className="flex w-[120px] h-[83px] items-center shrink-0 flex-nowrap relative z-[454]">
                <span className="flex w-[120px] h-[83px] justify-start items-center shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[28px] text-[#161616] relative text-left z-[455]">
                  Выполнено
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1701px] h-[857px] relative z-[500] mt-[24px] mr-0 mb-0 ml-[111px]">
        <div className="flex w-[872px] h-[528px] pt-[24px] pr-[24px] pb-[24px] pl-[36px] flex-col gap-[24px] justify-center items-start flex-nowrap bg-[#fff] rounded-[12px] absolute top-0 left-0 z-[324]">
          <div className="w-[812px] h-[482px] shrink-0 relative z-[325]">
            <div className="flex w-[812px] gap-[24px] justify-center items-start flex-nowrap relative z-[326] mt-0 mr-0 mb-0 ml-0">
              <div className="flex w-[551px] flex-col gap-[11px] justify-center items-center shrink-0 flex-nowrap relative z-[327]">
                <div className="flex w-[551px] gap-[11px] items-center shrink-0 flex-nowrap relative z-[328]">
                  <div className="flex w-[270px] gap-[11px] items-center shrink-0 flex-nowrap relative z-[329]">
                    <img src={selectedImage} className="w-[270px] h-[247px] shrink-0 bg-cover bg-no-repeat rounded-[8px] relative z-[330]" />
                    <div className="flex w-[87px] h-[20px] pt-[2px] pr-[12px] pb-[4px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[rgba(22,22,22,0.72)] rounded-[60px] absolute top-[213px] left-[91px] z-[331]">
                      <span className="flex w-[87px] h-[14px] justify-center items-start shrink-0 basis-auto font-['Golos_Text'] text-[12px] font-normal leading-[14px] text-[#fff] relative text-center whitespace-nowrap z-[332]">
                        05.12.2024
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[270px] gap-[11px] items-center shrink-0 flex-nowrap relative z-[333]">
                    <img src={selectedImage2} className="w-[270px] h-[247px] shrink-0 bg-cover bg-no-repeat rounded-[8px] relative z-[334]" />
                    <div className="flex w-[87px] h-[20px] pt-[2px] pr-[12px] pb-[4px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[rgba(22,22,22,0.72)] rounded-[60px] absolute top-[213px] left-[91px] z-[335]">
                      <span className="flex w-[70px] h-[14px] justify-center items-start shrink-0 basis-auto font-['Golos_Text'] text-[12px] font-normal leading-[14px] text-[#fff] relative text-center whitespace-nowrap z-[336]">
                        24.12.2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[531px] gap-[31px] items-center shrink-0 flex-nowrap relative z-[337]">
                  <div className="flex w-[250px] justify-between items-center shrink-0 flex-nowrap relative z-[338]">
                    {[House11, House12, House13, House14].map((image, index) => (
                      <button
                          type='button'
                          key={index}
                          onClick={() => handleImageClick(image, index)}
                          onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                  handleImageClick(image, index);
                              }
                          }}
                          className="p-0 border-none bg-transparent cursor-pointer"
                          aria-label={`Select image ${index + 1}`}
                      >
                          <img
                              src={image}
                              alt="building"
                              className={`w-[50px] h-[50px] shrink-0 bg-cover bg-no-repeat rounded-[8px] relative z-[339] ${
                                  index === activeIndex ? 'border-[2px] border-[#C00000]' : ''
                              }`}
                          />
                      </button>
                    ))}
                  </div>
                  <div className="flex w-[250px] justify-between items-center shrink-0 flex-nowrap relative z-[343]">
                    {[House21, House22, House23, House24].map((image2, index2) => (
                      <button
                          type='button'
                          key={index2}
                          onClick={() => handleImageClick2(image2, index2)}
                          onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                  handleImageClick2(image2, index2);
                              }
                          }}
                          className="p-0 border-none bg-transparent cursor-pointer"
                          aria-label={`Select image ${index2 + 1}`}
                      >
                          <img
                              src={image2}
                              alt="building"
                              className={`w-[50px] h-[50px] shrink-0 bg-cover bg-no-repeat rounded-[8px] relative z-[344] ${
                                  index2 === activeIndex2 ? 'border-[2px] border-[#C00000]' : ''
                              }`}
                          />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex h-[308px] flex-col justify-between items-start grow shrink-0 basis-0 flex-nowrap relative z-[348]">
                <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[349]">
                  <div className="flex items-start self-stretch shrink-0 flex-nowrap relative z-[350]">
                    <div className="flex w-[159px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[351]">
                      <span className="flex w-[159px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[14px] font-normal leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[352]">
                        Дата контрактации
                      </span>
                      <span className="h-[20px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[353]">
                        20.06.2023
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[354]">
                    <div className="flex w-[159px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[355]">
                      <span className="flex w-[159px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[14px] font-normal leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[356]">
                        Заказчик
                      </span>
                      <span className="h-[20px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[357]">
                        ДГП
                      </span>
                    </div>
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/7712341b-53cd-456d-a554-d344cebc1402.png)] bg-cover bg-no-repeat relative overflow-hidden z-[358] cursor-pointer" />
                  </div>
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[359]">
                    <div className="flex w-[159px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[360]">
                      <span className="flex w-[159px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[14px] font-normal leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[361]">
                        Генподрядчик
                      </span>
                      <span className="h-[20px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[362]">
                        ООО “ГП-МФС”
                      </span>
                    </div>
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/eed94ca7-b2e9-4a9c-a8c0-686bc8d12fa5.png)] bg-cover bg-no-repeat relative overflow-hidden z-[363] cursor-pointer" />
                  </div>
                  <div className="flex w-[122px] flex-col gap-[12px] justify-center items-start shrink-0 flex-nowrap relative z-[364]">
                    <span className="flex w-[159px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[14px] font-normal leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[365]">
                      Этажность
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[366]">
                      14
                    </span>
                  </div>
                  <div className="flex w-[122px] flex-col gap-[12px] justify-center items-start shrink-0 flex-nowrap relative z-[367]">
                    <span className="flex w-[159px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[14px] font-medium leading-[11px] text-[#c00000] relative text-left whitespace-nowrap z-[368]">
                      Видеокамеры
                    </span>
                    <div className="w-[21px] h-[13px] shrink-0 bg-[url(../assets/images/326af872-ea2c-4258-9336-d52b722c590a.png)] bg-cover bg-no-repeat relative z-[369]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[812px] h-[60px] pt-0 pr-[38px] pb-0 pl-[38px] gap-[30px] items-center flex-nowrap rounded-[10px] relative z-[383] mt-[16px] mr-0 mb-0 ml-0">
              <div className="flex w-[230px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[384]">
                <span className="flex w-[230px] h-[28px] justify-start items-start self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[16.8px] text-[#4f4f4f] relative text-left z-[385]">
                  Дата последнего продления (количество продлений)
                </span>
                <span className="flex w-[187px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[386]">
                  25.09.2024 (5)
                </span>
              </div>
              <div className="flex w-[177px] h-[60px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[387]">
                <span className="flex w-[177px] h-[28px] justify-start items-center shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[16.8px] text-[#4f4f4f] relative text-left z-[388]">
                  Прогноз получения РВ
                </span>
                <span className="h-[20px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[389]">
                  30.12.2024
                </span>
              </div>
            </div>
            <div className="flex w-[812px] h-[81px] pt-[19px] pr-0 pb-[19px] pl-0 gap-[100px] justify-center items-center flex-nowrap rounded-[10px] border-solid border-2 border-[#e5e7eb] relative z-[370] mt-[16px] mr-0 mb-0 ml-0">
              <div className="flex w-[160px] items-center shrink-0 flex-nowrap relative z-[371]">
                <div className="flex w-[159px] flex-col gap-[12px] justify-center items-start shrink-0 flex-nowrap relative z-[372]">
                  <span className="flex w-[159px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[14px] font-normal leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[373]">
                    Дата включения АИП
                  </span>
                  <span className="h-[20px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[374]">
                    25.09.2019
                  </span>
                </div>
              </div>
              <div className="flex w-[199px] justify-center items-center shrink-0 flex-nowrap relative z-[375]">
                <div className="flex w-[199px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[376]">
                  <span className="flex w-[177px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[14px] font-normal leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[377]">
                    Сумма по АИП
                  </span>
                  <span className="h-[20px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[378]">
                    1,871 млрд руб. (0%)
                  </span>
                </div>
              </div>
              <div className="flex w-[177px] justify-center items-center shrink-0 flex-nowrap relative z-[379]">
                <div className="flex w-[177px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[380]">
                  <span className="flex w-[177px] h-[11px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[14px] font-normal leading-[11px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[381]">
                    Аванс
                  </span>
                  <span className="h-[20px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[382]">
                    0 млрд руб. (0%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[803px] h-[45px] justify-between items-center flex-nowrap absolute top-0 left-[896px] z-[500]">
          <div className="flex w-[376px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] relative overflow-hidden z-[233]">
            <button className={`flex w-[214px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] border-none relative z-[234] text-[#161616] pointer ${activeButton === "customer" ? "text-white bg-gradient-to-b from-[#C00000] to-[#743949]" : "bg-white"}`} onClick={() => setActiveButton("customer")}>
              <span className="h-[13px] shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] relative text-left whitespace-nowrap z-[235]">
                Данные заказчика
              </span>
            </button>
            <button className={`flex w-[214px] pt-[16px] pr-[24px] pb-[16px] gap-[10px] justify-start items-center shrink-0 flex-nowrap rounded-[12px] border-none relative z-[234] pointer ${activeButton === "ano" ? "text-white bg-gradient-to-b from-[#C00000] to-[#743949]" : "bg-white"}`} onClick={() => setActiveButton("ano")}>
              <span className="h-[13px] shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] relative text-left whitespace-nowrap z-[237] ml-[24px]">
                Данные АНО
              </span>
            </button>
          </div>
          <a href='/listing' className="flex w-[244px] h-[32px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[5px] items-center shrink-0 flex-nowrap rounded-[8px] relative z-[238] cursor-pointer">
            <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/55199fcb-2f1b-4495-8396-55b1130156a6.png)] bg-cover bg-no-repeat relative z-[239]" />
            <span className="flex w-[183px] h-[13px] justify-start items-start shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[240]">
              Вернуться в реестр
            </span>
          </a>
        </div>
        <div className="flex w-[803px] h-[100px] gap-[16px] items-center flex-nowrap absolute top-[61px] left-[896px] z-[900]">
          <div className="flex w-[257px] pt-[5px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[7px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[500]">
            <div className="flex gap-[5px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[22] group w-min ml-auto cursor-pointer">
              <span className="flex w-[84px] h-[8px] justify-center items-start shrink-0 basis-auto font-['Golos_Text'] text-[12px] font-normal leading-[8px] text-[#c00000] relative text-center whitespace-nowrap z-[500]">
                Срок изменен
              </span>
              <div className="w-[11px] h-[11px] shrink-0 bg-[url(../assets/images/61d97dc9-4563-4b53-a14b-300627051c18.png)] bg-cover bg-no-repeat relative overflow-hidden z-[500] cursor-pointer" />
              <div className="absolute z-[2500] bottom-3 left-[100px] group-hover:block text-[#161616] hidden">
                <div className="flex flex-col p-[16px] border border-[#C00000] rounded-[8px] bg-white gap-[8px] w-[395px]">
                  <div className="flex">
                      <div className="flex flex-col gap-[8px]">
                          <span className="text-[14px]/[14px] font-normal">Предыдущий срок:</span>
                          <span className="text-[14px]/[14px] font-normal">Дата изменения:</span>
                          <span className="text-[14px]/[14px] font-normal">Кем принято решение:</span>
                      </div>
                      <div className="flex flex-col gap-[8px] ml-[24px]">    
                          <span className="text-[16px]/[14px] font-medium">25.09.2024</span>
                          <span className="text-[16px]/[14px] font-medium">03.12.2024</span>
                          <span className="text-[16px]/[14px] font-medium">Ефимов В.В.</span>
                      </div>
                  </div>
                  <span className="flex text-[14px]/[14px] font-normal justify-end">(Совещание от 24.09.2024) </span>
                </div>
              </div>
            </div>
            <div className="flex w-[211px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[25]">
              <div className="flex w-[131px] gap-[8px] justify-center items-center shrink-0 flex-nowrap relative z-[26]">
                <span className="h-[17px] shrink-0 basis-auto font-['Golos_Text'] text-[24px] font-semibold leading-[17px] text-[#161616] relative text-left whitespace-nowrap z-[27]">
                  30.12.2024
                </span>
              </div>
              <span className="flex w-[211px] h-[26px] justify-center items-start shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[16px] text-[#161616] relative text-center z-[28]">
                Плановый ввод по директивному графику
              </span>
            </div>
          </div>
          <div className="flex w-[257px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[29]">
            <div className="flex w-[128px] gap-[8px] items-center shrink-0 flex-nowrap relative z-30">
              <span className="h-[17px] shrink-0 basis-auto font-['Golos_Text'] text-[24px] font-semibold leading-[17px] text-[#161616] relative text-left whitespace-nowrap z-[31]">
                20.11.2024
              </span>
            </div>
            <span className="flex w-[225px] h-[26px] justify-center items-start self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[16px] text-[#161616] relative text-center z-[32]">
              Плановый ввод по <br />
              договору
            </span>
          </div>
          <div className="flex w-[257px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[33]">
            <div className="flex w-[130px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[34]">
              <span className="h-[17px] shrink-0 basis-auto font-['Golos_Text'] text-[24px] font-semibold leading-[17px] text-[#161616] relative text-left whitespace-nowrap z-[35]">
                26.12.2024
              </span>
            </div>
            <span className="flex w-[225px] h-[26px] justify-center items-start self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[16px] text-[#161616] relative text-center z-[36]">
              Прогнозируемый срок <br />
              ввода
            </span>
          </div>
        </div>
        <div className="flex w-auto h-[680px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[8px] items-start flex-nowrap bg-[#fff] rounded-[12px] absolute top-[177px] left-[898px] overflow-hidden shadow-[0_10px_50px_0_#d2d4d8] z-[37] overflow-y-auto">
          <div className="flex w-[747px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[24px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border-2 border-[#e4e6ea] relative z-[38]">
            <span className="h-[11px] self-stretch shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[39]">
              Строительная готовность
            </span>
            <div className="flex justify-between items-end self-stretch shrink-0 flex-nowrap relative z-40">
              <div className="flex w-[204px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[41]">
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[42]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[43]">
                    Неделя
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[44]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[45]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[46]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[47]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[48]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#00863d] tracking-[-0.4px] relative text-left whitespace-nowrap z-[49]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-50">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[51]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[52]">
                    Месяц
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[53]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[54]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[55]">
                        +2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[56]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[57]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#00863d] tracking-[-0.4px] relative text-left whitespace-nowrap z-[58]">
                        +2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[59]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[496px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[60]">
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[61]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[62]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[63]">
                      План
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[64]">
                      <div className="w-[303px] h-[14px] bg-[url(../assets/images/edbe40ec-18e6-411c-8ba2-06e406b45f01.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[65] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[66]">
                    76%
                  </span>
                </div>
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[67]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[68]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[69]">
                      Факт
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[70]">
                      <div className="w-[310px] h-[14px] bg-[url(../assets/images/f4a81485-8571-4a67-9a4c-8fe52334c0a2.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[71] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[72]">
                    77%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border-2 border-[#e4e6ea] relative z-[73]">
            <span className="h-[11px] self-stretch shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[74]">
              Конструктив
            </span>
            <div className="flex justify-between items-end self-stretch shrink-0 flex-nowrap relative z-[75]">
              <div className="flex w-[204px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[76]">
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[77]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[78]">
                    Неделя
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[79]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[80]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[81]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[82]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[83]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#c00000] tracking-[-0.4px] relative text-left whitespace-nowrap z-[84]">
                        -2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[85]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[86]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[87]">
                    Месяц
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[88]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[89]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[90]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[91]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[92]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#808080] tracking-[-0.4px] relative text-left whitespace-nowrap z-[93]">
                        +0%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[94]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[496px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[95]">
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[96]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[97]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[98]">
                      План
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[99]">
                      <div className="w-[356px] h-[14px] bg-[url(../assets/images/307cf1c4-ff53-42c8-9330-a0735cdddcd1.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[100] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[101]">
                    89%
                  </span>
                </div>
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[102]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[103]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[104]">
                      Факт
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[105]">
                      <div className="w-[316px] h-[14px] bg-[url(../assets/images/a8f90afa-14c6-4038-9b18-21b7b69266ef.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[106] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[107]">
                    80%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border-2 border-[#e4e6ea] relative z-[108]">
            <span className="h-[11px] self-stretch shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[109]">
              Стены и перегородки
            </span>
            <div className="flex justify-between items-end self-stretch shrink-0 flex-nowrap relative z-[110]">
              <div className="flex w-[204px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[111]">
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[112]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[113]">
                    Неделя
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[114]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[115]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[116]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[117]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[118]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#00863d] tracking-[-0.4px] relative text-left whitespace-nowrap z-[119]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[120]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[121]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[122]">
                    Месяц
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[123]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[124]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[125]">
                        +2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[126]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[127]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#00863d] tracking-[-0.4px] relative text-left whitespace-nowrap z-[128]">
                        +2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[129]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[496px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[130]">
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[131]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[132]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[133]">
                      План
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[134]">
                      <div className="w-[200px] h-[14px] bg-[url(../assets/images/099a3fc0-a73f-40a5-b7ee-4fb856f85394.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[135] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[136]">
                    50%
                  </span>
                </div>
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[137]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[138]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[139]">
                      Факт
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[140]">
                      <div className="w-[200px] h-[14px] bg-[url(../assets/images/0ea61875-effe-4af6-b3eb-881e415f4546.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[141] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[142]">
                    50%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex pt-[16px] pr-[16px] pb-[24px] pl-[16px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border-2 border-[#e4e6ea] relative z-[143] h-[125px] ${isExpanded1 ? 'h-auto' : 'h-[135px]'}`}>
            <div className="flex h-[12px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[144]">
              <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[145]">
                Фасад
              </span>
              <div className={`w-[12px] h-[7px] shrink-0 bg-[url(../assets/images/29820c8f-05e8-49d2-aefc-a6f29242ab32.png)] bg-cover bg-no-repeat relative z-[146] ${isExpanded1 ? 'rotate-180' : ''}`} onClick={() => setIsExpanded1(!isExpanded1)}onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') {setIsExpanded1(!isExpanded1);}}}/>
            </div>
            <div className="flex justify-between items-end self-stretch shrink-0 flex-nowrap relative z-[147]">
              <div className="flex w-[204px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[148]">
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[149]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[150]">
                    Неделя
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[151]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[152]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[153]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[154]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[155]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#00863d] tracking-[-0.4px] relative text-left whitespace-nowrap z-[156]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[157]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[158]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[159]">
                    Месяц
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[160]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[161]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[162]">
                        +2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[163]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[164]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#00863d] tracking-[-0.4px] relative text-left whitespace-nowrap z-[165]">
                        +2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[166]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[496px] flex-col gap-[8px] justify-center items-start shrink-0 flex-nowrap relative z-[167]">
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[168]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[169]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[170]">
                      План
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[171]">
                      <div className="w-[240px] h-[14px] bg-[url(../assets/images/f83f1370-2006-4374-a266-f4a8bbf730b5.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[172] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[173]">
                    60%
                  </span>
                </div>
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[174]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[175]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[176]">
                      Факт
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[177]">
                      <div className="w-[240px] h-[14px] bg-[url(../assets/images/947ff1ad-a955-4590-9b19-b1bda836f5b1.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[178] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[179]">
                    60%
                  </span>
                </div>
              </div>
            </div>
            <div className={`flex w-[386px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[180] ${isExpanded1 ? 'flex' : 'hidden'}`}>
              <button className={`w-[215px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[12px] items-center shrink-0 flex-nowrap bg-[#f1f3f7] rounded-[4px] border-none relative z-[181] pointer`}>
                <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[182]">
                  Фасадная система
                </span>
                <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-semibold leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[183]">
                  72%
                </span>
              </button>
              <button className="flex w-[159px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[12px] items-center shrink-0 flex-nowrap bg-[#f1f3f7] rounded-[4px] border-none relative z-[184] pointer">
                <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[185]">
                  Утеплитель
                </span>
                <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-semibold leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[186]">
                  57%
                </span>
              </button>
            </div>
          </div>
          <div className={`flex pt-[16px] pr-[16px] pb-[24px] pl-[16px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border-2 border-[#f1f3f7] relative z-[187] ${isExpanded2 ? 'h-auto' : 'h-[130px]'}`}>
            <div className="flex h-[12px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[188]">
              <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[189]">
                Фасад
              </span>
              <div className={`w-[12px] h-[7px] shrink-0 bg-[url(../assets/images/82f7ccc0-d8b4-4830-b0f9-2927350638cb.png)] bg-cover bg-no-repeat relative z-[190] ${isExpanded2 ? 'rotate-180' : ''}`} onClick={() => setIsExpanded2(!isExpanded2)}onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') {setIsExpanded2(!isExpanded2);}}}/>
            </div>
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[191]">
              <div className="flex w-[204px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[192]">
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[193]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[194]">
                    Неделя
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[195]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[196]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[197]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[198]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[199]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#00863d] tracking-[-0.4px] relative text-left whitespace-nowrap z-[200]">
                        +1%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[201]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[202]">
                  <span className="h-[10px] self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#4f4f4f] tracking-[-0.28px] relative text-center whitespace-nowrap z-[203]">
                    Месяц
                  </span>
                  <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[204]">
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[205]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#161616] tracking-[-0.4px] relative text-left whitespace-nowrap z-[206]">
                        +2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[207]">
                        план
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[208]">
                      <span className="h-[14px] shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-semibold leading-[14px] text-[#00863d] tracking-[-0.4px] relative text-left whitespace-nowrap z-[209]">
                        +2%
                      </span>
                      <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] tracking-[-0.28px] relative text-left whitespace-nowrap z-[210]">
                        факт
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[496px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative z-[211]">
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[212]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[213]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[214]">
                      План
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[215]">
                      <div className="w-[303px] h-[14px] bg-[url(../assets/images/eb88bccb-5077-4c77-ac0c-0930e8c51d9e.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[216] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[217]">
                    76%
                  </span>
                </div>
                <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[218]">
                  <div className="flex w-[451px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[219]">
                    <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-normal leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[220]">
                      Факт
                    </span>
                    <div className="w-[400px] h-[14px] shrink-0 bg-[#e7e9ed] rounded-[20px] relative overflow-hidden z-[221]">
                      <div className="w-[310px] h-[14px] bg-[url(../assets/images/d7cab236-9b51-4cd1-8fe1-5ac8ec1a2818.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[222] mt-0 mr-0 mb-0 ml-0" />
                    </div>
                  </div>
                  <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-semibold leading-[10px] text-[#161616] relative text-left whitespace-nowrap z-[223]">
                    77%
                  </span>
                </div>
              </div>
            </div>
            <div className={`w-[386px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[224] ${isExpanded2 ? 'flex' : 'hidden'}`}>
              <div className="flex w-[215px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[12px] items-center shrink-0 flex-nowrap bg-[#f1f3f7] rounded-[4px] relative z-[225]">
                <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[226]">
                  Фасадная система
                </span>
                <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-semibold leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[227]">
                  72%
                </span>
              </div>
              <div className="flex w-[159px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[12px] items-center shrink-0 flex-nowrap bg-[#f1f3f7] rounded-[4px] relative z-[228]">
                <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[229]">
                  Утеплитель
                </span>
                <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-semibold leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[230]">
                  57%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[872px] h-[313px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[36px] items-start flex-nowrap bg-[#fff] rounded-[12px] absolute top-[544px] left-0 shadow-[0_10px_50px_0_#d2d4d8] z-[241]">
          <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Golos_Text'] text-[24px] font-semibold leading-[17px] text-[#161616] relative text-left whitespace-nowrap z-[242]">
            Мониторинг ресурсов на строительной площадке
          </span>
          <div className="flex gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[243]">
            <div className="flex flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[244]">
              <span className="h-[13px] self-stretch shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#c00000] relative text-left whitespace-nowrap z-[245]">
                Люди
              </span>
              <div className="w-[373px] h-[159px] shrink-0 relative z-[246]">
                <div className="w-[399px] h-[124px] relative z-[258] mt-[10px] mr-0 mb-0 ml-px">
                  <span className="flex h-[24px] justify-start items-start font-['Golos_Text'] text-[14px] font-medium leading-[24px] text-[#303030] absolute top-0 left-[259px] text-left whitespace-nowrap z-[258]">
                    план - 250 чел
                  </span>
                  <div className="w-[109px] h-[117px] bg-[url(../assets/images/7d6b1145-e158-4ee7-ab3c-10c759079885.png)] bg-cover bg-no-repeat absolute top-[7px] left-[142px] z-[251]" />
                  <div className="w-[109px] h-[108px] bg-[url(../assets/images/be3fd09d-a8c9-4c67-a6bb-214a0d7c61c9.png)] bg-cover bg-no-repeat absolute top-[16px] left-[251px] z-[252]" />
                  <div className="w-[358.5px] h-[46.5px] bg-[url(../assets/images/0c9bc6be-2912-45a1-9a64-ea2ed0fb6f29.png)] bg-cover bg-no-repeat absolute top-[24px] left-[1.5px] z-[256]" />
                  <div className="w-[142px] h-[96px] bg-[url(../assets/images/39a9b73f-ef6d-4170-b430-6ff0446e6bc2.png)] bg-cover bg-no-repeat absolute top-[28px] left-0 z-[250]" />
                  <div className="flex w-[44px] h-[11px] gap-[4px] items-end flex-nowrap absolute top-[28px] left-[355px] z-[253]">
                    <div className="w-[10px] h-[10px] shrink-0 bg-[url(../assets/images/5999ce5d-0f33-42e5-8394-5c84e5d679ef.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[254]" />
                    <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-medium leading-[11px] text-[#c00000] relative text-left whitespace-nowrap z-[255]">
                      200
                    </span>
                  </div>
                  <div className="w-[371.5px] h-[7.364px] bg-[url(../assets/images/9b2a6c82-1a07-41b7-93af-e1840b37cf9b.png)] bg-cover bg-no-repeat absolute top-[120.318px] left-0 z-[257]" />
                </div>
                <div className="flex w-[360px] h-[24px] justify-between items-center relative z-[249] mt-px mr-0 mb-0 ml-0">
                  <span className="h-[24px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[24px] text-[#161616] relative text-left whitespace-nowrap z-[248]">
                    01.12.2024
                  </span>
                  <div className="flex w-[200px] h-[24px] justify-between items-center shrink-0 relative z-[249]">
                    <span className="h-[24px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[24px] text-[#161616] relative text-left whitespace-nowrap z-[249]">
                      07.12.2024
                    </span>
                    <span className="h-[24px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[24px] text-[#161616] relative text-left whitespace-nowrap z-[247]">
                      14.12.2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[259]">
              <span className="h-[13px] self-stretch shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#c00000] relative text-left whitespace-nowrap z-[260]">
                Техника
              </span>
              <div className="w-[375px] h-[159px] shrink-0 relative z-[261]">
                <div className="w-[389px] h-[125px] relative z-[273] mt-[10px] mr-0 mb-0 ml-0">
                  <span className="flex h-[24px] justify-start items-start font-['Golos_Text'] text-[14px] font-medium leading-[24px] text-[#303030] absolute top-0 left-[277px] text-left whitespace-nowrap z-[272]">
                    план - 50 ед
                  </span>
                  <div className="w-[109px] h-[119px] bg-[url(../assets/images/06b23727-a17b-4ec9-a912-2e8177594359.png)] bg-cover bg-no-repeat absolute top-[5px] left-[78px] z-[263]" />
                  <div className="w-[358.5px] h-[31.5px] bg-[url(../assets/images/cc404623-7ee5-4ae8-a724-fa2e35b48759.png)] bg-cover bg-no-repeat absolute top-[24px] left-[3.5px] z-[273]" />
                  <div className="w-[76px] h-[96px] bg-[url(../assets/images/7c0b4cbd-2980-47e1-91f3-de6095862459.png)] bg-cover bg-no-repeat absolute top-[28px] left-[2px] z-[262]" />
                  <div className="w-[175px] h-[94px] bg-[url(../assets/images/ef61f6fc-48a1-4a6c-8e42-d04c83e62fd3.png)] bg-cover bg-no-repeat absolute top-[31px] left-[187px] z-[264]" />
                  <div className="flex w-[32px] h-[11px] gap-[4px] items-end flex-nowrap absolute top-[44px] left-[357px] z-[269]">
                    <div className="w-[10px] h-[10px] shrink-0 bg-[url(../assets/images/660f95bc-7c9c-4c1f-a486-87dfbf4ed584.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[270]" />
                    <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-medium leading-[11px] text-[#c00000] relative text-left whitespace-nowrap z-[271]">
                      41
                    </span>
                  </div>
                  <div className="w-[375px] h-[7.364px] bg-[url(../assets/images/5f6ebe71-e53c-457a-85e2-bb9a26f631bf.png)] bg-cover bg-no-repeat absolute top-[120.318px] left-0 z-[265]" />
                </div>
                <div className="flex w-[361px] h-[24px] justify-between items-center relative z-[268] mt-0 mr-0 mb-0 ml-0">
                  <span className="h-[24px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[24px] text-[#161616] relative text-left whitespace-nowrap z-[267]">
                    01.12.2024
                  </span>
                  <div className="flex w-[212px] h-[24px] justify-between items-center shrink-0 relative z-[268]">
                    <span className="h-[24px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[24px] text-[#161616] relative text-left whitespace-nowrap z-[268]">
                      07.12.2024
                    </span>
                    <span className="h-[24px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[24px] text-[#161616] relative text-left whitespace-nowrap z-[266]">
                      14.12.2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1699px] pt-[36px] pr-0 pb-[36px] pl-0 gap-[32px] items-start flex-wrap bg-[#fff] rounded-[12px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[274] mt-[16px] mr-0 mb-0 ml-[111px]">
        <div className="flex w-[1669px] justify-between items-center flex-nowrap relative z-[275]">
          <div className="flex w-[659px] pt-0 pr-0 pb-0 pl-[36px] gap-[48px] items-center shrink-0 flex-nowrap relative z-[276]">
            <span className="h-[17px] shrink-0 basis-auto font-['Golos_Text'] text-[24px] font-semibold leading-[17px] text-[#161616] relative text-left whitespace-nowrap z-[277]">
              Этапы реализации
            </span>
            <div className="flex w-[322px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[278]">
              <div className="flex w-[60px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[279]">
                <div className="w-[16px] h-[12px] shrink-0 bg-[#d9d9d9] rounded-[8px] relative z-[280]" />
                <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[10px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[281]">
                  План
                </span>
              </div>
              <div className="flex w-[60px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[282]">
                <div className="w-[16px] h-[12px] shrink-0 bg-[#00863d] rounded-[8px] relative z-[283]" />
                <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[10px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[284]">
                  Факт
                </span>
              </div>
              <div className="flex w-[154px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[285]">
                <div className="w-[16px] h-[12px] shrink-0 bg-[#ffcc00] rounded-[8px] relative z-[286]" />
                <span className="h-[10px] shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[10px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[287]">
                  Требуются данные
                </span>
              </div>
            </div>
          </div>
          <button className="flex w-[177px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] border-none relative z-[288] pointer bg-gradient-to-b from-[#C00000] to-[#743949]">
            <span className="h-[13px] shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#fff] relative text-left whitespace-nowrap z-[289]">
              Просмотр КСГ
            </span>
          </button>
        </div>
        <div className="flex pt-0 pr-[36px] pb-0 pl-[36px] justify-between items-end grow basis-0 flex-nowrap relative z-[290]">
          <div className="w-[1474px] h-[54px] shrink-0 relative overflow-hidden z-[291]">
            <div className="flex w-[32px] h-[54px] flex-col gap-[10px] justify-center items-center flex-nowrap bg-[url(../assets/images/432ecd67-e7ce-4959-8929-4826590ee8d1.png)] bg-cover bg-no-repeat relative z-[321] mt-0 mr-0 mb-0 ml-[1442px]" onClick={handleNextSlide}/>
            <div className="flex w-[1476px] h-[54px] gap-[12px] items-end flex-nowrap absolute top-0 left-0 z-[292]">
            <div className="flex w-[32px] h-[54px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[url(../assets/images/67ba9b0a-f2d9-4bce-a670-7297bf8b0851.png)] bg-cover bg-no-repeat relative z-[293]" onClick={handlePrevSlide}/>
            <Swiper
              onSwiper={(swiper: SwiperRef) => (swiperRef.current = swiper)}
              slidesPerView={8}
              spaceBetween={20}
              modules={[Navigation]}
              className="flex w-full h-[54px] items-end flex-nowrap z-[292]"
            >
              <SwiperSlide>
                <div className="flex flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[294]">
                  <span className="flex w-[129px] h-[40px] mx-auto justify-center items-start shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center z-[295]">
                    Устройство подземной части
                  </span>
                  <div className="h-[6px] w-[129px] mx-auto self-stretch shrink-0 bg-[#00863d] rounded-[20px] relative overflow-hidden z-[296]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[297]">
                <span className="flex w-[139px] h-[40px] justify-center items-start self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center z-[298]">
                  Устройство надземной части
                </span>
                <div className="h-[6px] w-[139px] self-stretch shrink-0 bg-[url(../assets/images/7ca94064-048d-49b9-8f71-a832fe1b644b.png)] bg-cover bg-no-repeat rounded-[20px] relative overflow-hidden z-[299]" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[300]">
                <span className="flex w-[164px] h-[40px] justify-center items-start self-stretch shrink-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center z-[301]">
                  Устройство инженерных систем
                </span>
                <div className="h-[6px] w-[164px] self-stretch shrink-0 bg-[url(../assets/images/32c62cc1-38fb-4525-bd55-d976eb6adcc9.png)] bg-cover bg-no-repeat rounded-[20px] relative overflow-hidden z-[302]" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex h-[54px] flex-col gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[303]">
                <span className="flex w-[140px] mx-auto justify-center items-center grow shrink-0 basis-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center z-[304]">
                  Отделочные работы
                </span>
                <div className="h-[6px] w-[140px] mx-auto self-stretch shrink-0 bg-[url(../assets/images/01550e98-e38d-49eb-a6a1-d1f95df23953.png)] bg-cover bg-no-repeat rounded-[20px] relative overflow-hidden z-[305]" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex h-[54px] flex-col gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[306]">
                <span className="flex w-[205px] mx-auto justify-center items-center grow shrink-0 basis-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center z-[307]">
                  Благоустройство территории
                </span>
                <div className="h-[6px] w-[205px] mx-auto self-stretch shrink-0 bg-[url(../assets/images/0d5c86e2-7d7e-45ea-8216-7b60bd277bce.png)] bg-cover bg-no-repeat rounded-[20px] relative overflow-hidden z-[308]" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex h-[54px] flex-col gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[309]">
                <span className="flex w-[125px] ml-auto items-center justify-center self-stretch grow shrink-0 basis-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center z-[310]">
                  Получение ЗОС
                </span>
                <div className="h-[6px] w-[125px] ml-auto self-stretch shrink-0 bg-[url(../assets/images/a1117613-6725-4c6a-a6ed-cf2dab2530af.png)] bg-cover bg-no-repeat rounded-[20px] relative overflow-hidden z-[311]" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex h-[54px] flex-col gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[312]">
                <span className="flex w-[140px] justify-center items-center self-stretch grow shrink-0 basis-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center z-[313]">
                  Получение РВ
                </span>
                <div className="h-[6px] w-[140px] self-stretch shrink-0 bg-[url(../assets/images/c67bb97c-46f5-44d0-b351-9c61c415cb82.png)] bg-cover bg-no-repeat rounded-[20px] relative overflow-hidden z-[314]" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex h-[54px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[315]">
                <span className="flex w-[148px] mx-auto justify-center items-center grow shrink-0 basis-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center overflow-hidden z-[316]">
                  Постановка
                  <br />
                  на кадастровый учет
                </span>
                <div className="h-[6px] w-[148px] mx-auto self-stretch shrink-0 bg-[#d9d9d9] rounded-[20px] relative overflow-hidden z-[317]" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex h-[54px] flex-col gap-[8px] justify-end items-center shrink-0 flex-nowrap opacity-30 relative z-[318]">
                <span className="flex w-[121px] mx-auto justify-center items-center grow shrink-0 basis-0 font-['Golos_Text'] text-[14px] font-medium leading-[20px] text-[#161616] relative text-center overflow-hidden z-[319]">
                  Передача
                  <br />
                  под заселение
                </span>
                <div className="h-[6px] w-[121px] mx-auto self-stretch shrink-0 bg-[#d9d9d9] rounded-[20px] relative overflow-hidden z-[320]" />
              </div>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
          <a href='/etaps' className="flex w-[128px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[12px] items-center shrink-0 flex-nowrap bg-[#f1f3f7] rounded-[4px] border-none relative z-[322] pointer">
            <span className="h-[11px] shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] relative text-left whitespace-nowrap z-[323]">
              Все этапы
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;