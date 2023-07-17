import { CalendarBlank, CaretDown, GraduationCap, MapPin } from "@phosphor-icons/react";

const Schedule = () => {
  return (
    <div className="block">
      <div className="title_container">
        <h1>Расписание</h1>
      </div>

      <div className="calendar_block select">
        <CalendarBlank weight="bold" className="icon_mid" />
        <h4 className="date">20.06.2023</h4>
        <CaretDown weight="bold" className="icon_mid" />
      </div>

      <div className="element_container">
        <div className="title_container">
          <h3>Вторник</h3>
          <h4 className="date">20.06.2023</h4>
        </div>
        <div className="content_cover">
          <div className="content_elem_column">
            <div className="container_row_start">
              <div className="lighter lab">
                <p className="text_lighter">9:30 – 11:00</p>
              </div>
              <div className="lesson_active"></div>
            </div>
            <h3>лаб Информационные системы и технологии</h3>
            <div className="column_container_mini low_opacity">
              <div className="container_row_start">
                <GraduationCap weight="bold" className="icon_min" />
                <p>проф.Ахметсафин Л.М.</p>
              </div>
              <div className="container_row_start">
                <MapPin weight="bold" className="icon_min" />
                <p>каб. 348</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="element_container">
        <div className="title_container">
          <h3>Среда</h3>
          <h4 className="date">21.06.2023</h4>
        </div>
        <div className="content_cover">

          <div className="content_elem_column">
            <div className="container_row_start">
              <div className="lighter pract">
                <p className="text_lighter">9:30 – 11:00</p>
              </div>
              <div className="lesson_active hidden"></div>
            </div>
            <h3>прак Информационные системы и технологии</h3>
            <div className="column_container_mini low_opacity">
              <div className="container_row_start">
                <GraduationCap weight="bold" className="icon_min" />
                <p>проф.Ахметсафин Л.М.</p>
              </div>
              <div className="container_row_start">
                <MapPin weight="bold" className="icon_min" />
                <p>каб. 348</p>
              </div>
            </div>
          </div>

          <div className="breaker"></div>

          <div className="content_elem_column">
            <div className="container_row_start">
              <div className="lighter lect">
                <p className="text_lighter">11:15 – 13:00</p>
              </div>
              <div className="lesson_active hidden"></div>
            </div>
            <h3>лек Геолого-геофизические информационные комплексы</h3>
            <div className="column_container_mini low_opacity">
              <div className="container_row_start">
                <GraduationCap weight="bold" className="icon_min" />
                <p>зав Каф Оборнев Е.А.</p>
              </div>
              <div className="container_row_start">
                <MapPin weight="bold" className="icon_min" />
                <p>к.к</p>
              </div>
            </div>
          </div>

          <div className="breaker"></div>

          <div className="content_elem_column">
            <div className="container_row_start">
              <div className="lighter exam">
                <p className="text_lighter">13:00 – 15:20</p>
              </div>
              <div className="lesson_active hidden"></div>
            </div>
            <h3>экз Геолого-геофизические информационные комплексы</h3>
            <div className="column_container_mini low_opacity">
              <div className="container_row_start">
                <GraduationCap weight="bold" className="icon_min" />
                <p>зав Каф Оборнев Е.А.</p>
              </div>
              <div className="container_row_start">
                <MapPin weight="bold" className="icon_min" />
                <p>к.к</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Schedule;