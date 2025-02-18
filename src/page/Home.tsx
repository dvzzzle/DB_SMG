import React from "react";
import { useState } from 'react';
import "./index.css";
import data from '../assets/data/main.json';

const years = [2024, 2025, 2026, 2027, 2028];
const executivePolicyBody = ['Департамент градостроительной политики', 'Вариант 2', 'Вариант 3', 'Вариант 4', 'Нет'];

const customers = [
  'ООО "Росстрой"',
  'АО "Генпроект"',
  'ООО "СтройПлюс"',
  'ЗАО "Городстрой"',
  'ИП "Никита Строев"',
];

const Home = () => {

  const [isRotate1, setIsRotated1] = useState(false);
  const [isRotate2, setIsRotated2] = useState(false);
  const [isRotate3, setIsRotated3] = useState(false);

  /*-----------------------------------------------------------------------------*/

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeButtons, setActiveButtons] = useState<string[]>([]);

  const toggleButton = (buttonName: string) => {
    setActiveButtons((prev: string[]) =>
      prev.includes(buttonName)
        ? prev.filter((name: string) => name !== buttonName)
        : [...prev, buttonName]
    );
  };

  /*-----------------------------------------------------------------------------*/

  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);
  const [isOpen1, setIsOpen1] = useState<boolean>(false);

  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  const handlePolicyClick = (policy: string) => {
    setIsOpen1(false);
    setSelectedPolicy(policy);
    setIsRotated2(false);
  };

  const handleAddCustomer = (customer: string) => {
    if (!selectedCustomers.includes(customer)) {
      setSelectedCustomers([...selectedCustomers, customer]);
    }
  };

  const handleRemoveCustomer = (customer: string) => {
    setSelectedCustomers(selectedCustomers.filter((item) => item !== customer));
  };

  const getLabel1 = () => {
    if (!selectedPolicy) return 'Выберите';
    return selectedPolicy;
  };

  const toggleOpen1 = () => {
    setIsOpen1((prev) => !prev);
    setIsRotated2((prev) => !prev);
  };

  const toggleOpen2 = () => {
    setIsOpen2((prev) => !prev);
    setIsRotated3((prev) => !prev);
  };

  const getLabel2 = () => {
    if (selectedCustomers.length === 0) return 'Выберите заказчиков';
    return selectedCustomers.join(', ');
  };

  /*-----------------------------------------------------------------------------*/
  
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleYear = (year: number) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const getLabel = () => {
    if (selectedYears.length === 0) return "Период";
    const minYear = Math.min(...selectedYears);
    const maxYear = Math.max(...selectedYears);
    return minYear === maxYear ? `${minYear}` : `${minYear} - ${maxYear}`;
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setIsRotated1((prev) => !prev);
  };

  /*-----------------------------------------------------------------------------*/

  const [activeButton1, setActiveButton1] = useState("objects");
  const [activeButton2, setActiveButton2] = useState("all-objects");
  const [activeButton3, setActiveButton3] = useState("min-days");

  /*-----------------------------------------------------------------------------*/
  //Данные получаемые из JSON

  const count_all = data['panel-all'].count;
  const area_all = data['panel-all'].area;
  const delta_all = data['panel-all'].delta; //нет на ДБ нет расчетов

  const count_work_not_started = data['panel-work-not-stated'].objects.count;
  const area_work_not_started = data['panel-work-not-stated'].objects.area;
  const delta_work_not_started = data['panel-work-not-stated'].objects.delta; //нет расчетов
  const count_work_not_started_violation = data['panel-work-not-stated'].violation_of_deadlines.count;
  const area_work_not_started_violation = data['panel-work-not-stated'].violation_of_deadlines.area;
  const delta_work_not_started_violation = data['panel-work-not-stated'].violation_of_deadlines.delta; //нет на ДБ нет расчетов
  const count_work_not_started_missed_deadlines = data['panel-work-not-stated'].missed_deadlines.count;
  const area_work_not_started_missed_deadlines = data['panel-work-not-stated'].missed_deadlines.area;
  const delta_work_not_started_missed_deadlines = data['panel-work-not-stated'].missed_deadlines.delta; //нет на ДБ нет расчетов

  const count_pir = data['panel_pir'].objects.count;
  const area_pir = data['panel_pir'].objects.area;
  const delta_pir = data['panel_pir'].objects.delta; //нет расчетов
  const count_pir_violation = data['panel_pir'].violation_of_deadlines.count;
  const area_pir_violation = data['panel_pir'].violation_of_deadlines.area;
  const delta_pir_violation = data['panel_pir'].violation_of_deadlines.delta; //нет на ДБ нет расчетов
  const count_pir_missed_deadlines = data['panel_pir'].missed_deadlines.count;
  const area_pir_missed_deadlines = data['panel_pir'].missed_deadlines.area;
  const delta_pir_missed_deadlines = data['panel_pir'].missed_deadlines.delta; //нет на ДБ нет расчетов 

  const count_smr = data['panel_smr'].objects.count;
  const area_smr = data['panel_smr'].objects.area;
  const delta_smr = data['panel_smr'].objects.delta; //нет расчетов
  const count_smr_schedule_input = data['panel_smr'].schedule_input.count;
  const area_smr_schedule_input = data['panel_smr'].schedule_input.area;
  const delta_smr_schedule_input = data['panel_smr'].schedule_input.delta; //нет расчетов
  const count_smr_violation = data['panel_smr'].violation_of_deadlines.count;
  const area_smr_violation = data['panel_smr'].violation_of_deadlines.area;
  const delta_smr_violation = data['panel_smr'].violation_of_deadlines.delta; //нет на ДБ нет расчетов
  const count_smr_missed_deadlines = data['panel_smr'].missed_deadlines.count;
  const area_smr_missed_deadlines = data['panel_smr'].missed_deadlines.area;
  const delta_smr_missed_deadlines = data['panel_smr'].missed_deadlines.delta; //нет на ДБ нет расчетов 
  
  const count_ready = data['panel_ready'].count;
  const area_ready = data['panel_ready'].area;
  const delta_ready = data['panel_ready'].delta; //нет расчетов

  /*-----------------------------------------------------------------------------*/
  return (
    <div className="main-container w-[1920px] h-screen bg-[#f1f3f7] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1650px] justify-between items-center flex-nowrap relative mt-[48px] mr-0 mb-0 ml-[135px]">
        <div className="flex w-[298px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="w-[298px] h-[64px] shrink-0 bg-[url(../assets/images/9c814f35-9f91-48d5-b4e1-996cdbba88ff.png)] bg-cover bg-no-repeat relative overflow-hidden z-[2]" />
        </div>
        <a href="/listing" className="flex w-[596px] h-[39px] justify-start items-center shrink-0 basis-auto font-['Inter'] text-[32px] font-medium leading-[39px] text-[#c00000] relative text-left whitespace-nowrap z-[3]">
          Мониторинг строительства объектов
        </a>
      </div>
      <div className="flex w-[1120px] gap-[24px] items-center flex-nowrap relative z-[505] mt-[64px] mr-0 mb-0 ml-[665px]">
        <div className="flex w-[254px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] gap-[4px] items-center shrink-0 flex-nowrap bg-[#f9f9f9] rounded-[16px] border-solid border border-[#d5d5d5] relative z-[5]">
          <button className={`flex w-[129px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] border-none relative z-[6] pointer ${activeButton1 === "objects" ? " text-white bg-[#4f4f4f]" : "bg-white text-[#161616]"}`} onClick={() => setActiveButton1("objects")}>
            <span className="h-[13px] shrink-0 basis-auto font-['Inter'] text-[18px] font-medium leading-[13px] relative text-left whitespace-nowrap z-[7]">
              Объекты
            </span>
          </button>
          <button className={`flex w-[113px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] relative z-[8] ${activeButton1 === "tasks" ? " text-white bg-[#4f4f4f]" : "bg-white text-[#161616]"}`} onClick={() => setActiveButton1("tasks")}>
            <span className="h-[13px] shrink-0 basis-auto font-['Inter'] text-[18px] font-medium leading-[13px] relative text-left whitespace-nowrap z-[9]">
              Задачи
            </span>
          </button>
        </div>
        <div className="flex w-[263px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] gap-[4px] items-center shrink-0 flex-nowrap bg-[#f9f9f9] rounded-[16px] border-solid border border-[#d5d5d5] relative z-10">
          <button className={`flex w-[163px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] border-none relative z-[11] pointer ${activeButton2 === "all-objects" ? " text-white bg-[#4f4f4f]" : " bg-white text-[#161616]"}`} onClick={() => setActiveButton2("all-objects")}>
            <span className="h-[13px] shrink-0 basis-auto font-['Inter'] text-[18px] font-medium leading-[13px] relative text-left whitespace-nowrap z-[12]">
              Все объекты
            </span>
          </button>
          <button className={`flex w-[88px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] relative z-[13] ${activeButton2 === "aip" ? " text-white bg-[#4f4f4f]" : " bg-white text-[#161616]"}`} onClick={() => setActiveButton2("aip")}>
            <span className="h-[13px] shrink-0 basis-auto font-['Inter'] text-[18px] font-medium leading-[13px] relative text-left whitespace-nowrap z-[14]">
              АИП
            </span>
          </button>
        </div>
        <div className="flex w-[239px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] gap-[4px] items-center shrink-0 flex-nowrap bg-[#f9f9f9] rounded-[16px] border-solid border border-[#d5d5d5] relative z-[15]">
          <button className={`flex w-[107px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#4f4f4f] rounded-[16px] border-none relative z-[16] pointer ${activeButton3 === "min-days" ? " text-white bg-[#4f4f4f]" : " bg-white text-[#161616]"}`} onClick={() => setActiveButton3("min-days")}>
            <span className="h-[13px] shrink-0 basis-auto font-['Inter'] text-[18px] font-medium leading-[13px] relative text-left whitespace-nowrap z-[17]">
              7 дней
            </span>
          </button>
          <button className={`flex w-[120px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] relative z-[18] ${activeButton3 === "max-days" ? " text-white bg-[#4f4f4f]" : " bg-white text-[#161616]"}`} onClick={() => setActiveButton3("max-days")}>
            <span className="h-[13px] shrink-0 basis-auto font-['Inter'] text-[18px] font-medium leading-[13px] relative text-left whitespace-nowrap z-[19]">
              30 дней
            </span>
          </button>
        </div>
        <div className="flex w-[292px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[503]">
          <span className="h-[13px] shrink-0 basis-auto font-['Inter'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[503]">
            Период АИП
          </span>
          <div className="relative w-[166px]">
          <button
            onClick={toggleOpen}
            className="flex w-[163px] font-['Inter'] h-[53px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center shrink-0 flex-nowrap bg-[#f9f9f9] rounded-[16px] border-solid border border-[#d5d5d5] relative z-[503]"
          >
            {getLabel()}
            <div className={`w-[14px] h-[6.5px] shrink-0 bg-[url(../assets/images/52dc046d-4c23-4424-9f56-5b090cbd3cfe.png)] bg-cover bg-no-repeat relative z-[503] ${isRotate1 ? 'rotate-0' : 'rotate-180'}`}></div>
          </button>
          {isOpen && (
            <div className="absolute mt-2 w-[155px] h-[159px] bg-white border border-[#D6D6D6] rounded-[16px] shadow-md p-2 overflow-auto scrollbar-thin scrollbar-thumb-[#556981]/30 scrollbar-track-transparent scrollbar-thumb-rounded-[20px] scrollbar-w-[8px] scrollbar-h-[49px] z-[503]">
              {years.map((year) => (
                <label
                  key={year}
                  className="flex items-center space-x-2 py-1 cursor-pointer z-[503]"
                >
                  <input
                    type="checkbox"
                    checked={selectedYears.includes(year)}
                    onChange={() => toggleYear(year)}
                    className="w-[19px] h-[19px] border border-[#C00000] rounded-[6px] appearance-none checked:bg-[#C00000]"
                  />
                  <span className="text-[18px] font-medium text-[#161616]">{year}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        </div>
      </div>
      <div className="flex w-[1185px] h-[524px] flex-col gap-[42px] items-start flex-nowrap absolute top-[276px] left-[132px] z-[59]">
        <div className="flex h-[127px] pt-[24px] pr-[36px] pb-[24px] pl-[36px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[60]">
          <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[26px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[61]">
            Всего
          </span>
          <div className="flex gap-[20px] justify-center items-end grow shrink-0 basis-0 flex-nowrap relative z-[62]">
            <span className="h-[47px] shrink-0 basis-auto font-['Inter'] text-[64px] font-semibold leading-[47px] text-[#161616] relative text-left whitespace-nowrap z-[63]">
              {count_all}
            </span>
            <div className="flex w-[151px] gap-[4px] items-end shrink-0 flex-nowrap relative z-[64]">
              <span className="h-[23px] shrink-0 basis-auto font-['Inter'] text-[32px] font-bold leading-[23px] text-[#161616] relative text-left whitespace-nowrap z-[65]">
                {area_all}
              </span>
              <span className="flex w-[81px] h-[17px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-normal leading-[17px] text-[#161616] relative text-left whitespace-nowrap z-[66]">
                млн м²
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[67]">
          <div className="flex w-[329px] pt-[36px] pr-[20px] pb-[36px] pl-[20px] flex-col gap-[58px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[68]">
            <div className="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[69]">
              <div className="flex w-[139px] h-[47px] gap-[19px] items-center shrink-0 flex-nowrap relative z-[70]">
                <span className="flex w-[131px] h-[50px] justify-start items-start shrink-0 font-['Inter'] text-[26px] font-medium leading-[31.466px] text-[#161616] relative text-left z-[71]">
                  Работы не начаты
                </span>
              </div>
              <div className="flex w-[140px] flex-col gap-[10px] items-end shrink-0 flex-nowrap relative z-[72]">
                <div className="flex w-[140px] gap-[8px] items-end shrink-0 flex-nowrap relative z-[73]">
                  <span className="h-[47px] shrink-0 basis-auto font-['Inter'] text-[64px] font-semibold leading-[47px] text-[#161616] relative text-left whitespace-nowrap z-[74]">
                    {count_work_not_started}
                  </span>
                  <span className="h-[23px] shrink-0 basis-auto font-['Inter'] text-[32px] font-semibold leading-[23px] text-[#5cc089] relative text-left whitespace-nowrap z-[75]">
                    {delta_work_not_started}
                  </span>
                </div>
                <div className="flex w-[135px] gap-[4px] justify-end items-center shrink-0 flex-nowrap relative z-[76]">
                  <span className="flex w-[50px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[17px] text-[#161616] relative text-center whitespace-nowrap z-[77]">
                    {area_work_not_started}
                  </span>
                  <span className="flex w-[81px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-normal leading-[17px] text-[#161616] relative text-center whitespace-nowrap z-[78]">
                    млн м²
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[79]">
              <div className="flex flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[80]">
                <span className="flex w-[136.5px] h-[57px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[18px] font-medium leading-[21.784px] text-[#161616] relative text-left z-[81]">
                  Возможно
                  <br />
                  нарушение
                  <br />
                  сроков
                </span>
                <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[82]">
                  <div className="flex gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[83]">
                    <span className="h-[26px] shrink-0 basis-auto font-['Inter'] text-[36px] font-semibold leading-[26px] text-[#161616] relative text-left whitespace-nowrap z-[84]">
                      {count_work_not_started_violation}
                    </span>
                  </div>
                  <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[85]">
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[86]">
                      {area_work_not_started_violation}
                    </span>
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[87]">
                      млн м²
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-px h-[149px] shrink-0 bg-[url(../assets/images/379f9811-49f3-4ef7-a105-22be893c1704.png)] bg-cover bg-no-repeat relative z-[88]" />
              <div className="flex flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[89]">
                <span className="h-[13px] self-stretch shrink-0 basis-auto font-['Inter'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[90]">
                  Срыв срока
                </span>
                <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[91]">
                  <div className="flex gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[92]">
                    <span className="h-[26px] shrink-0 basis-auto font-['Inter'] text-[36px] font-semibold leading-[26px] text-[#161616] relative text-left whitespace-nowrap z-[93]">
                      {count_work_not_started_missed_deadlines}
                    </span>
                  </div>
                  <div className="flex w-[70px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[94]">
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[95]">
                      {area_work_not_started_missed_deadlines}
                    </span>
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[96]">
                      млн м²
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-[36px] pr-[20px] pb-[36px] pl-[20px] flex-col gap-[58px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[20px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[97]">
            <div className="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[98]">
              <div className="flex h-[47px] justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-[99]">
                <span className="h-[19px] grow shrink-0 basis-auto font-['Inter'] text-[26px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[100]">
                  ПИР
                </span>
              </div>
              <div className="flex w-[140px] flex-col gap-[10px] items-end shrink-0 flex-nowrap relative z-[101]">
                <div className="flex w-[140px] gap-[8px] items-end shrink-0 flex-nowrap relative z-[102]">
                  <span className="h-[47px] shrink-0 basis-auto font-['Inter'] text-[64px] font-semibold leading-[47px] text-[#161616] relative text-left whitespace-nowrap z-[103]">
                    {count_pir}
                  </span>
                  <span className="h-[23px] shrink-0 basis-auto font-['Inter'] text-[32px] font-semibold leading-[23px] text-[#5cc089] relative text-left whitespace-nowrap z-[104]">
                    {delta_pir}
                  </span>
                </div>
                <div className="flex w-[140px] gap-[4px] justify-end items-center shrink-0 flex-nowrap relative z-[105]">
                  <span className="flex w-[55px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[17px] text-[#161616] relative text-center whitespace-nowrap z-[106]">
                    {area_pir}
                  </span>
                  <span className="flex w-[81px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-normal leading-[17px] text-[#161616] relative text-center whitespace-nowrap z-[107]">
                    млн м²
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[108]">
              <div className="flex flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[109]">
                <span className="flex w-[100.5px] h-[57px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[18px] font-medium leading-[21.784px] text-[#161616] relative text-left overflow-hidden z-[110]">
                  Возможно нарушение
                  <br />
                  сроков
                </span>
                <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[111]">
                  <div className="flex gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[112]">
                    <span className="h-[26px] shrink-0 basis-auto font-['Inter'] text-[36px] font-semibold leading-[26px] text-[#161616] relative text-left whitespace-nowrap z-[113]">
                      {count_pir_violation}
                    </span>
                  </div>
                  <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[114]">
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[115]">
                      {area_pir_violation}
                    </span>
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[116]">
                      млн м²
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-px h-[149px] shrink-0 bg-[url(../assets/images/d971329d-8ab2-4791-bf03-73672fd2f880.png)] bg-cover bg-no-repeat relative z-[117]" />
              <div className="flex flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[118]">
                <span className="flex w-[100.5px] h-[35px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[18px] font-medium leading-[21.784px] text-[#161616] relative text-left z-[119]">
                  Срыв срока
                </span>
                <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[120]">
                  <div className="flex w-[25px] gap-[8px] items-end shrink-0 flex-nowrap relative z-[121]">
                    <span className="h-[26px] shrink-0 basis-auto font-['Inter'] text-[36px] font-semibold leading-[26px] text-[#161616] relative text-left whitespace-nowrap z-[122]">
                      {count_pir_missed_deadlines}
                    </span>
                  </div>
                  <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[123]">
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[124]">
                      {area_pir_missed_deadlines}
                    </span>
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[125]">
                      млн м²
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[380px] pt-[36px] pr-[20px] pb-[36px] pl-[20px] flex-col gap-[58px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[126]">
            <div className="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[127]">
              <div className="flex h-[47px] justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-[128]">
                <span className="h-[19px] grow shrink-0 basis-auto font-['Inter'] text-[26px] font-medium leading-[19px] text-[#161616] relative text-left whitespace-nowrap z-[129]">
                  СМР
                </span>
              </div>
              <div className="flex w-[187px] flex-col gap-[10px] items-end shrink-0 flex-nowrap relative z-[130]">
                <div className="flex w-[187px] gap-[8px] items-end shrink-0 flex-nowrap relative z-[131]">
                  <span className="h-[47px] shrink-0 basis-auto font-['Inter'] text-[64px] font-semibold leading-[47px] text-[#161616] relative text-left whitespace-nowrap z-[132]">
                    {count_smr}
                  </span>
                  <span className="h-[23px] shrink-0 basis-auto font-['Inter'] text-[32px] font-semibold leading-[23px] text-[#5cc089] relative text-left whitespace-nowrap z-[133]">
                    {delta_smr}
                  </span>
                </div>
                <div className="flex w-[140px] gap-[4px] justify-end items-center shrink-0 flex-nowrap relative z-[134]">
                  <span className="flex w-[55px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-bold leading-[17px] text-[#161616] relative text-center whitespace-nowrap z-[135]">
                    {area_smr}
                  </span>
                  <span className="flex w-[81px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[24px] font-normal leading-[17px] text-[#161616] relative text-center whitespace-nowrap z-[136]">
                    млн м²
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[137]">
              <div className="flex w-[104px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[138]">
                <span className="flex w-[104px] h-[35px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[18px] font-medium leading-[21.784px] text-[#161616] relative text-left z-[139]">
                  Ввод
                  <br />
                  по графику
                </span>
                <div className="flex w-[94px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative z-[140]">
                  <div className="flex w-[88px] gap-[8px] items-end shrink-0 flex-nowrap relative z-[141]">
                    <span className="h-[26px] shrink-0 basis-auto font-['Inter'] text-[36px] font-semibold leading-[26px] text-[#161616] relative text-left whitespace-nowrap z-[142]">
                      {count_smr_schedule_input}
                    </span>
                    <span className="h-[23px] shrink-0 basis-auto font-['Inter'] text-[32px] font-semibold leading-[23px] text-[#00863d] relative text-left whitespace-nowrap z-[143]">
                      {delta_smr_schedule_input}
                    </span>
                  </div>
                  <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[144]">
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[145]">
                      {area_smr_schedule_input}
                    </span>
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[146]">
                      млн м²
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-px h-[149px] shrink-0 bg-[url(../assets/images/deff4122-4092-4af5-b6eb-be75dc7371b4.png)] bg-cover bg-no-repeat relative z-[147]" />
              <div className="flex w-[105px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[148]">
                <span className="flex w-[105px] h-[57px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[18px] font-medium leading-[21.784px] text-[#161616] relative text-left z-[149]">
                  Возможно нарушение сроков
                </span>
                <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[150]">
                  <div className="flex gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[151]">
                    <span className="h-[26px] shrink-0 basis-auto font-['Inter'] text-[36px] font-semibold leading-[26px] text-[#161616] relative text-left whitespace-nowrap z-[152]">
                      {count_smr_violation}
                    </span>
                  </div>
                  <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[153]">
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[154]">
                      {area_smr_violation}
                    </span>
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[155]">
                      млн м²
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-px h-[149px] shrink-0 bg-[url(../assets/images/839de18e-21b0-4104-8b89-fe9cd40885c6.png)] bg-cover bg-no-repeat relative z-[156]" />
              <div className="flex w-[99px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[157]">
                <span className="flex w-[99px] h-[35px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[18px] font-medium leading-[21.784px] text-[#161616] relative text-left z-[158]">
                  Срыв
                  <br />
                  срока
                </span>
                <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[159]">
                  <div className="flex w-[101px] gap-[8px] items-end shrink-0 flex-nowrap relative z-[160]">
                    <span className="h-[26px] shrink-0 basis-auto font-['Inter'] text-[36px] font-semibold leading-[26px] text-[#161616] relative text-left whitespace-nowrap z-[161]">
                      {count_smr_missed_deadlines}
                    </span>
                    <span className="h-[23px] shrink-0 basis-auto font-['Inter'] text-[32px] font-semibold leading-[23px] text-[#c00000] relative text-left whitespace-nowrap z-[162]">
                      {delta_smr_missed_deadlines}
                    </span>
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/d38ec6a6-9c81-4edc-9c17-a41d1d042871.png)] bg-cover bg-no-repeat relative overflow-hidden z-[163]" />
                  </div>
                  <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[164]">
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[165]">
                      {area_smr_missed_deadlines}
                    </span>
                    <span className="h-[12px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[12px] text-[#161616] relative text-left whitespace-nowrap z-[166]">
                      млн м²
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[171px] pt-[50px] pr-[12px] pb-[50px] pl-[12px] gap-[10px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative shadow-[0_10px_50px_0_#d2d4d8] z-[167]">
            <div className="flex w-[147px] h-[255px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[168]">
              <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Inter'] text-[26px] font-medium leading-[19px] text-[#161616] relative text-center whitespace-nowrap z-[169]">
                Введено
              </span>
              <div className="flex flex-col gap-[11px] justify-center items-center self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[170]">
                <div className="flex gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[171]">
                  <span className="h-[47px] shrink-0 basis-auto font-['Inter'] text-[64px] font-semibold leading-[47px] text-[#161616] relative text-left whitespace-nowrap z-[172]">
                    {count_ready}
                  </span>
                  <span className="h-[23px] shrink-0 basis-auto font-['Inter'] text-[32px] font-semibold leading-[23px] text-[#5cc089] relative text-left whitespace-nowrap z-[173]">
                    {delta_ready}
                  </span>
                </div>
                <div className="w-[147px] self-stretch shrink-0 font-['Golos_Text'] text-[32px] font-bold leading-[17px] relative text-left whitespace-nowrap z-[174]">
                  <span className="font-['Inter'] text-[24px] font-bold leading-[38.4px] text-[#161616] relative text-left">
                    {area_ready}
                  </span>
                  <span className="font-['Inter'] text-[24px] font-normal leading-[38.4px] text-[#161616] relative text-left">
                    млн м²
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[410px] h-[118px] flex-col gap-[24px] items-start flex-nowrap absolute top-[288px] left-[1375px] z-[503]">
        <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[17px] text-[#161616] relative text-left whitespace-nowrap z-[503]">
          Орган исполнительной власти
        </span>
        <div>
          <button
            onClick={toggleOpen1}
            className="flex w-[410px] font-['Inter'] h-[53px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center shrink-0 flex-nowrap bg-[#f9f9f9] rounded-[16px] border-solid border border-[#d5d5d5] relative z-[503]"
          >
            {getLabel1()}
            <div className={`w-[14px] h-[6.5px] shrink-0 bg-[url(../assets/images/52dc046d-4c23-4424-9f56-5b090cbd3cfe.png)] bg-cover bg-no-repeat relative z-[503] ${isRotate2 ? 'rotate-0' : 'rotate-180'}`}></div>
          </button>
          {isOpen1 && (
            <div className="absolute mt-2 w-[410px] h-[159px] bg-white border border-[#D6D6D6] rounded-[16px] shadow-md p-2 overflow-auto scrollbar-thin scrollbar-thumb-[#556981]/30 scrollbar-track-transparent scrollbar-thumb-rounded-[20px] scrollbar-w-[8px] scrollbar-h-[49px] z-[503]">
              {executivePolicyBody.map((policy, index) => (
                <div
                  key={index}
                  onClick={() => handlePolicyClick(policy)}
                  className="flex items-center space-x-2 py-1 cursor-pointer rounded-[12px] z-[503] hover:border-[1px] hover:border-[#C00000]"
                >
                  <span className="text-[18px] font-medium text-[#161616]">{policy}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-[410px] h-[147px] flex-col items-start flex-nowrap absolute top-[428px] left-[1375px] z-[502]">
        <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] mb-[24px] text-[24px] font-medium leading-[17px] text-[#161616] relative text-left whitespace-nowrap z-[502]">
          Заказчик
        </span>
        <div className="mb-4">
          <button
            onClick={toggleOpen2}
            className="flex w-[410px] h-[53px] px-[24px] justify-between items-center bg-[#f9f9f9] rounded-[16px] border border-[#d5d5d5] relative z-[502]"
          >
            <span className="block truncate max-w-[calc(100%-30px)] font-['Inter']">{getLabel2()}</span>
            <div className={`w-[14px] h-[6.5px] shrink-0 bg-[url(../assets/images/52dc046d-4c23-4424-9f56-5b090cbd3cfe.png)] bg-cover bg-no-repeat relative z-[502] ${isRotate3 ? 'rotate-0' : 'rotate-180'}`}></div>
          </button>
          {isOpen2 && (
            <div className="absolute mt-2 w-[410px] h-[159px] bg-white border border-[#D6D6D6] rounded-[16px] shadow-md p-2 overflow-auto scrollbar-thin scrollbar-thumb-[#556981]/30 scrollbar-track-transparent scrollbar-thumb-rounded-[20px] scrollbar-w-[8px] scrollbar-h-[49px] z-[502]">
              {customers.map((customer, index) => (
                <div
                  key={index}
                  onClick={() => handleAddCustomer(customer)}
                  className="flex items-center space-x-2 rounded-[12px] py-1 cursor-pointer z-[502] hover:border-[1px] hover:border-[#C00000]"
                >
                  <span className="text-[18px] font-medium text-[#161616]">{customer}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-[5px] flex-wrap">
          {selectedCustomers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center bg-white px-3 py-1 rounded-[8px]"
            >
              <span className="text-[18px] whitespace-nowrap font-normal text-[#161616]">{customer}</span>
              <button
                onClick={() => handleRemoveCustomer(customer)}
                className="ml-2 text-[#C00000] text-xl"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[660px] right-[210px]">
        <div className="relative">
          <div
            className="flex w-[330px] h-[37px] gap-[12px] items-center flex-nowrap cursor-pointer"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[24px] font-medium leading-[17px] text-[#161616] relative text-left whitespace-nowrap">
              Расширенные фильтры
            </span>
            <div className="flex w-[40px] h-[37px] gap-[8px] items-center shrink-0 flex-nowrap relative">
              <div className="flex w-[40px] h-[37px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] relative">
                <div
                  className={`w-[14px] h-[7px] shrink-0 bg-[url(../assets/images/52dc046d-4c23-4424-9f56-5b090cbd3cfe.png)] bg-cover bg-no-repeat ${
                    isFiltersOpen ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
            </div>
          </div>
          {isFiltersOpen && (
            <div className="flex w-[330px] h-auto flex-col gap-[16px] items-start flex-nowrap mt-4">
              <span className="h-[13px] self-stretch shrink-0 font-['Inter'] text-[18px] font-medium leading-[13px] text-[#161616] relative text-left whitespace-nowrap">
                По уровням
              </span>

              {/* Блок 1 */}
              <div className="h-auto self-stretch shrink-0 relative">
                <div className="flex w-[345px] gap-[12px] items-center flex-nowrap relative">
                  <span className="flex w-[9px] h-[13px] justify-center items-start shrink-0 font-['Inter'] text-[18px] font-medium leading-[13px] text-[#4f4f4f] relative text-center whitespace-nowrap">
                    1
                  </span>
                  <div className="flex w-[324px] gap-[8px] items-center shrink-0 flex-nowrap relative">
                    {["Жилые", "Нежилые", "Дороги"].map((name) => (
                      <button
                        key={name}
                        className={`flex w-[95px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] border-none relative transition-colors duration-300 ${
                          activeButtons.includes(name) ? "bg-[#7D7D7D] text-white" : "bg-[#fff] text-[#161616]"
                        }`}
                        onClick={() => toggleButton(name)}
                      >
                        <span className="text-[18px] font-normal leading-[13px]">{name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className={`w-[90px] h-[37px] rounded-[12px] border-none relative mt-[16px] ml-[22.5px] transition-colors duration-300 ${
                    activeButtons.includes("Метро") ? "bg-[#7D7D7D] text-white" : "bg-[#fff] text-[#161616]"
                  }`}
                  onClick={() => toggleButton("Метро")}
                >
                  <span className="text-[18px] font-normal leading-[13px]">Метро</span>
                </button>
              </div>
                
              {/* Блок 2 */}
              <div className="h-auto self-stretch shrink-0 relative">
                <div className="flex w-[345px] gap-[12px] items-center flex-nowrap relative">
                  <span className="flex w-[9px] h-[13px] justify-center items-start shrink-0 font-['Inter'] text-[18px] font-medium leading-[13px] text-[#4f4f4f] relative text-center whitespace-nowrap">
                    2
                  </span>
                  <div className="flex w-[324px] gap-[8px] items-center shrink-0 flex-nowrap relative">
                    {["Реновация", "Не реновация"].map((name) => (
                      <button
                        key={name}
                        className={`flex w-[150px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] border-none relative transition-colors duration-300 ${
                          activeButtons.includes(name) ? "bg-[#7D7D7D] text-white" : "bg-[#fff] text-[#161616]"
                        }`}
                        onClick={() => toggleButton(name)}
                      >
                        <span className="text-[18px] font-normal leading-[13px]">{name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;