import React from "react";
import "./index.css";
import { useState } from 'react';
import { Filter } from "../assets/images/filter";

const buttons1 = [
  { id: 9, label: "Жилые", count: 13 },
  { id: 10, label: "Нежилые", count: 84 },
  { id: 11, label: "Дороги", count: 56 },
];

const buttons = [
  { id: 1, label: "В строительстве", count: 103 },
  { id: 2, label: "Введен", count: 25 },
  { id: 3, label: "Приостановлено", count: 0 },
  { id: 4, label: "Иное", count: 25 },
];

const risksButtons = [
  { id: 5, label: "Есть риски", count: 119 },
  { id: 6, label: "Нет рисков", count: 34 },
];

const violationsButtons = [
  { id: 7, label: "Есть нарушения", count: 1 },
  { id: 8, label: "Нет нарушений", count: 152 },
];

const Listing = () => {

  const [isFilled, setIsFilled] = useState(false);

  const [isRotated, setIsRotated] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState('Сначала новые');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setIsRotated(!isRotated);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setIsVisible(false);
    setIsRotated(!isRotated);
    setIsFilled(true);
  };

  const toggleIconFill = () => {
    setIsFilled(false);
  };

  /*--------------------------------------------------------------------------------*/

  const [activeButtons, setActiveButtons] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleButtonClick = (id: number) => {
    setActiveButtons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

    /*--------------------------------------------------------------------------------*/

  const [activeButton, setActiveButton] = useState<number | null>(null);

  const buttons3 = [
    { id: 1, text: "Все объекты - 153", bgColor: "#fff", border: true },
    { id: 2, text: "Ввод по графику - 1", bgColor: "#e8f7e6" },
    { id: 3, text: "Возможно нарушение сроков - 1", bgColor: "#fcf7e3" },
    { id: 4, text: "Срыв срока - 3", bgColor: "#f8e4e4" },
  ];


  return (
    <div className="main-container w-[1920px] h-[1600px] bg-[#f1f3f7] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[365px] flex-col gap-[24px] items-start flex-nowrap relative z-[81] mt-[117px] mr-0 mb-0 ml-[135px]">
        <div className="flex w-[365px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[82]">
          <a href="/" className="h-[13px] shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#c00000] relative text-left whitespace-nowrap z-[84]">
            Назад
          </a>
        </div>
        <span className="flex w-[317px] h-[25px] justify-start items-start shrink-0 font-['Golos_Text'] text-[36px] font-semibold leading-[25px] text-[#161616] relative text-left whitespace-nowrap z-[85]">
          Реестр объектов
        </span>
      </div>
      <div className="w-[1650px] h-[61px] relative z-[91] mt-[37px] mr-0 mb-0 ml-[135px]">
        <div className="flex w-[1090px] h-[61px] pt-[24px] pr-[8px] pb-[24px] pl-[36px] gap-[10px] items-center flex-nowrap bg-[#fff] rounded-[12px] absolute top-0 left-0 overflow-hidden z-[86]">
          <input className="w-[1090px] h-[61px] shrink-0 bg-transparent border-none absolute pl-8 top-0 left-0 z-[88]" placeholder="Поиск по УИНу, адресу, типу, наименованию, подрядчику, заказчику объекта" />
        </div>
        <div onClick={toggleIconFill} className="flex w-[61px] h-[61px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center flex-nowrap bg-[#fff] rounded-[8px] absolute top-0 left-[1349px] z-[89] cursor-pointer">
          <Filter className={`w-[18px] h-[18.378px] ${isFilled ? 'fill-current text-[#c00000]' : 'fill-none'}`} />
        </div>
        <button
          onClick={toggleVisibility}
          className="flex w-[224px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[16px] justify-center items-center flex-nowrap bg-[#fff] rounded-[8px] border-none absolute top-0 left-[1426px] z-[91] pointer"
        >
          <span className="flex w-[135px] h-[13px] justify-center items-start shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] text-[#161616] relative text-center whitespace-nowrap z-[92]">
            {selectedFilter}
          </span>
          <div className={`w-[14px] h-[7px] shrink-0 bg-[url(../assets/images/52dc046d-4c23-4424-9f56-5b090cbd3cfe.png)] bg-cover bg-no-repeat relative z-[93] ${isRotated ? 'rotate-0' : 'rotate-180'}`} />
        </button>
      </div>
        {isVisible && (
          <div className="w-[1650px] h-[152px] absolute z-[501] mt-[23px] mr-0 mb-0 ml-[135px]">
            <div className="flex w-[224px] h-[146px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-start flex-nowrap bg-[#fff] rounded-[12px] absolute top-0 left-[1426px] shadow-[0_10px_50px_0_#d2d4d8] z-[501]">
              <button
                onClick={() => handleFilterChange('Сначала новые')}
                className="flex w-[200px] h-[61px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative z-[95] pointer transition-all duration-300 ease-in-out hover:border-[2px] hover:bg-[#f4e6e6] hover:border-[#c00000] hover:text-[#c00000]"
              >
                <span className="flex w-[135px] h-[13px] justify-center items-start shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[96]">
                  Сначала новые
                </span>
              </button>
              <div
                onClick={() => handleFilterChange('Сначала старые')}
                className="flex w-[200px] h-[61px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] relative transition-all duration-300 ease-in-out z-[97] hover:border-[2px] hover:bg-[#f4e6e6] hover:border-[#c00000] hover:text-[#c00000]"
              >
                <span className="flex w-[142px] h-[13px] justify-center items-start shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[98]">
                  Сначала старые
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="relative left-[135px] top-[20px] font-['Golos_Text'] z-[500]">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <span className="flex items-center text-[16px] text-[#161616] pr-[102px]">По виду объекта</span>
              <div className="flex gap-4">
                {buttons1.map(({ id, label, count }) => (
                  <button
                    key={id}
                    className={`px-4 py-3 rounded-[6px] border-none ${
                      activeButtons[id] ? "bg-[#DAE8F6]" : "bg-[#fff]"
                    }`}
                    onClick={() => handleButtonClick(id)}
                  >
                    <span className="text-[18px] text-[#4f4f4f]">
                      {label} - <strong>{count}</strong>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex pr-[102px]">
              <span className="flex items-center text-[16px] text-[#161616] pr-[151px]">По стадии</span>
              <div className="flex gap-4">
                {buttons.map(({ id, label, count }) => (
                  <button
                    key={id}
                    className={`px-4 py-3 rounded-[6px] border-none ${
                      activeButtons[id] ? "bg-[#DAE8F6]" : "bg-[#fff]"
                    }`}
                    onClick={() => handleButtonClick(id)}
                  >
                    <span className="text-[18px] text-[#4f4f4f]">
                      {label} - <strong>{count}</strong>
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex">
              <span className="flex items-center text-[16px] text-[#161616] pr-[149px]">По рискам</span>
              <div className="flex gap-4">
                {risksButtons.map(({ id, label, count }) => (
                  <button
                    key={id}
                    className={`px-4 py-3 rounded-[6px] border-none ${
                      activeButtons[id] ? "bg-[#DAE8F6]" : "bg-[#fff]"
                    }`}
                    onClick={() => handleButtonClick(id)}
                  >
                    <span className="text-[18px] text-[#4f4f4f]">
                      {label} - <strong>{count}</strong>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex">
              <span className="flex text-[16px] items-center text-[#161616] pr-[14px]">
                Мероприятия по<br/> устранению срывов сроков
              </span>
              <div className="flex gap-4">
                {violationsButtons.map(({ id, label, count }) => (
                  <button
                    key={id}
                    className={`px-4 py-3 rounded-[6px] border-none ${
                      activeButtons[id] ? "bg-[#DAE8F6]" : "bg-[#fff]"
                    }`}
                    onClick={() => handleButtonClick(id)}
                  >
                    <span className="text-[18px] text-[#4f4f4f]">
                      {label} - <strong>{count}</strong>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      <div className="flex w-[1163px] flex-col gap-[32px] items-start flex-nowrap relative z-[99] mt-[54px] mr-0 mb-0 ml-[136px]">
        <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[100]">
          {buttons3.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveButton(button.id)}
              className={`flex h-[61px] pt-0 pr-[24px] pb-0 pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] relative z-[${100 + button.id}] pointer
                ${activeButton === button.id || (button.border && activeButton === null) ? "border border-[#c00000] bg-[#fff]" : "border-none"}
                `}
              style={{ backgroundColor: button.bgColor, width: button.id === 1 ? "243px" : button.id === 2 ? "262px" : button.id === 3 ? "402px" : "208px" }}
            >
              <span className="h-[15px] shrink-0 font-['Golos_Text'] text-[22px] font-medium leading-[15px] text-[#4f4f4f] relative text-left whitespace-nowrap">
                {button.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="w-[1650px] h-[1129px] relative z-[110] mt-[23px] mr-0 mb-0 ml-[135px]">
        <div className="flex h-[80px] pt-[30px] bg-white rounded-t-3xl pr-[25px] pb-[10px] pl-[25px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[40px] h-[22px] justify-start items-center basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[2]">
            #
          </span>
          <span className="h-[22px] w-[210px] basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[3]">
            Объект
          </span>
          <span className="h-[22px] w-[210px] basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[4]">
            Адрес
          </span>
          <span className="flex w-[135px] h-[22px] justify-start items-center basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[5]">
            Тип объекта
          </span>
          <span className="h-[22px] w-[380px] basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[6]">
            Заказчик
          </span>
          <span className="h-[22px] w-[260px] basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[7]">
            Генподрядчик
          </span>
          <span className="flex w-[240px] h-[22px] justify-start items-center basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[8]">
            Срок ввода
          </span>
          <span className="flex w-[100px] h-[22px] justify-start items-center basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-10">
            Готовность
          </span>
        </div>
        <div className="flex w-[1650px] h-[703px] pt-[16px] pr-0 pb-0 pl-0 flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[12px] top-px left-0 overflow-hidden overflow-y-auto">
          <a href="/dashboard" className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[41]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[42]">
              1
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[43]">
              ГОРОДСКАЯ СТРОЙКА
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[44]">
              Чечерский пр. вл. 28, участок 1
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[45]">
              Жилые
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[46]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[47]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[48]">
              30.06.2025
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[49]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-50">
              55%
            </span>
          </a>
          <a href="/dashboard" className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-[1px] border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[41]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[42]">
              2
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[43]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[44]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[45]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[46]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[47]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[48]">
              30.06.2025
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[49]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-50">
              55%
            </span>
          </a>
          <a href="/dashboard" className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[41]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[42]">
              3
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[43]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[44]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[45]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[46]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[47]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[48]">
              30.06.2025
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[49]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-50">
              55%
            </span>
          </a>
          <a href="/dashboard" className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[41]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[42]">
              4
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[43]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[44]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[45]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[46]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[47]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[48]">
              30.06.2025
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[49]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-50">
              55%
            </span>
          </a>
          <a href="/dashboard" className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[51]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[52]">
              5
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[53]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[54]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[55]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[56]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[57]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[58]">
              06.09.24
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[59]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[60]">
              81%
            </span>
          </a>
          <a href="/dashboard" className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[61]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[62]">
              6
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[63]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[64]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[65]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[66]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[67]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[68]">
              06.09.24
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[69]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[70]">
              39%
            </span>
          </a>
          <a href="/dashboard" className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[71]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[72]">
              7
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[73]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[74]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[75]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[76]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[77]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[78]">
              06.09.24
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[79]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[80]">
              39%
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Listing;