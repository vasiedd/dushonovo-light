/*
  Настройки сайта-помощника "Душоново: электричество".
  В этом файле нет персональных данных жителей.
*/

window.APP_CONFIG = {
  campaignName: "Душоново: электричество",
  formUrl: "https://forms.yandex.ru/u/69fe6f879029026437ab8973/",
  formFields: {
    actionType: "answer_one_answer_9008977537392610",
    agency: "answer_one_answer_9008977537461314",
    fullName: "answer_short_text_9008977537617936",
    phone: "answer_phone_9008977537665536",
    email: "answer_non_profile_email_9008977537677054",
    address: "answer_short_text_9008977537689528",
    appealNumber: "answer_short_text_9008977537720148",
    eventDate: "answer_short_text_9008977537741052",
    comment: "answer_short_text_9008977537777320"
  },
  formAnswerIds: {
    actionType: {
      sent: "9008977537392620",
      receivedAnswer: "1778282680739",
      failed: "1778282686037"
    },
    agency: {
      rosseti: "9008977537461324",
      mosenergosbyt: "1778282743850",
      dobrodel: "1778282748912",
      administration: "1778282757105",
      rostekhnadzor: "1778282764594",
      rospotrebnadzor: "1778282769975",
      prosecutor: "1778282775630",
      fas: "1778282781407",
      other: "1778282788737"
    }
  },
  stats: {
    lastUpdated: "не обновлялось",
    participants: 0,
    confirmedAppeals: 0,
    receivedAnswers: 0
  },
  agencies: [
    {
      id: "rosseti",
      wave: "first",
      name: "Россети Московский регион",
      purpose: "Главный адресат по сетям: линия, ТП, фидер, аварии, перегрузка и сроки устранения.",
      officialUrl: "https://rossetimr.ru/waiting/",
      urlHint: "Интернет-приёмная перенесена в личный кабинет. Понадобится регистрация/вход."
    },
    {
      id: "mosenergosbyt",
      wave: "first",
      name: "Мосэнергосбыт",
      purpose: "Гарантирующий поставщик: претензия по качеству услуги, лицевой счёт, фиксация нарушения.",
      officialUrl: "https://www.mosenergosbyt.ru/common/lobby/",
      urlHint: "Лучше отправлять через личный кабинет или форму обращений."
    },
    {
      id: "dobrodel",
      wave: "first",
      name: "Добродел / Минэнерго Московской области",
      purpose: "Административный контроль области и требование проверить проблему как системную.",
      officialUrl: "https://dobrodel.mosreg.ru/",
      urlHint: "Нужна авторизация. Категорию выбирайте по электроснабжению/ЖКХ, если доступно."
    },
    {
      id: "administration",
      wave: "first",
      name: "Администрация городского округа Щёлково",
      purpose: "Местный контроль: официальный запрос сетевикам, встреча жителей и постановка вопроса на контроль.",
      officialUrl: "https://shhyolkovo.ru/mestnoe-samoupravlenie/appeals/",
      urlHint: "Если форма изменилась, ищите на сайте раздел обращений граждан."
    },
    {
      id: "rostekhnadzor",
      wave: "second",
      name: "Ростехнадзор",
      purpose: "Технический надзор: проверка эксплуатации электросетевого оборудования и признаков перегрузки.",
      officialUrl: "https://www.gosnadzor.ru/public/reception/feedback/",
      urlHint: "Если электронная приёмная перенаправит на Госуслуги, используйте вход через Госуслуги."
    },
    {
      id: "rospotrebnadzor",
      wave: "second",
      name: "Роспотребнадзор",
      purpose: "Права потребителей: качество услуги, фиксация нарушения, порядок перерасчёта.",
      officialUrl: "https://petition.rospotrebnadzor.ru/petition/",
      urlHint: "Для жалобы с возможной проверкой обычно требуется авторизация через ЕСИА."
    },
    {
      id: "prosecutor",
      wave: "second",
      name: "Прокуратура Московской области",
      purpose: "Проверка бездействия и отписок после первой волны обращений.",
      officialUrl: "https://epp.genproc.gov.ru/ru/proc_50/internet-reception/",
      urlHint: "Лучше использовать после первых ответов или отсутствия реакции."
    },
    {
      id: "fas",
      wave: "extra",
      name: "ФАС / УФАС",
      purpose: "Дополнительно: если появятся признаки злоупотребления сетевой организации или дискриминации.",
      officialUrl: "https://fas.gov.ru/pages/contacts/requests",
      urlHint: "Не основной адресат первой волны."
    }
  ]
};
