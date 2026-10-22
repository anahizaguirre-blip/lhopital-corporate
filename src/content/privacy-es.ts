// Aviso de privacidad de Lhopital, S.A. de C.V. Transcrito sin cambios de
// 202610_AVISO_DE_PRIVACIDAD_lhopitalcorp.docx (última actualización: 22 de octubre de 2026).

export type Run = { text: string; bold?: boolean };
export type PrivacyBlock =
  | { type: "heading"; text: string }
  | { type: "p"; runs: Run[] }
  | { type: "list"; items: Run[][] };

export const PRIVACY_ES: PrivacyBlock[] = [
  {
    "type": "heading",
    "text": "AVISO DE PRIVACIDAD"
  },
  {
    "type": "heading",
    "text": "LHOPITAL, S.A. DE C.V."
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Sitio web: www.lhopitalcorp.mx"
      }
    ]
  },
  {
    "type": "heading",
    "text": "I. IDENTIDAD Y DOMICILIO DEL RESPONSABLE"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Lhopital, S.A. de C.V.",
        "bold": true
      },
      {
        "text": " (en adelante, “Lhopital”), con domicilio en Andador 5, 5C-31, Colonia Alianza Popular Revolucionaria, Alcaldía Coyoacán, C.P. 04800, Ciudad de México, es responsable del tratamiento de los datos personales que usted nos proporcione, en términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, publicada en el Diario Oficial de la Federación el 20 de marzo de 2025 (la “Ley”), su Reglamento y demás disposiciones aplicables."
      }
    ]
  },
  {
    "type": "heading",
    "text": "II. ALCANCE DE ESTE AVISO"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Este Aviso de Privacidad aplica exclusivamente al sitio web www.lhopitalcorp.mx (el “Sitio”). El Sitio es de carácter informativo: no cuenta con formularios de registro, tienda en línea ni carrito de compras."
      }
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "El Sitio contiene enlaces a www.lhopital.mx (Lhopital Moto) y www.lhopital-fr.mx (Lhopital FR). Cada uno de esos sitios cuenta con su propio aviso de privacidad, que le recomendamos consultar al ingresar a ellos. El presente Aviso no regula el tratamiento de datos personales que se realice en dichos sitios ni en sitios de terceros."
      }
    ]
  },
  {
    "type": "heading",
    "text": "III. DATOS PERSONALES QUE TRATAMOS"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "El Sitio no recaba datos personales de forma directa. Lhopital únicamente tratará los datos personales que usted decida proporcionarnos de manera voluntaria al contactarnos por correo electrónico o por teléfono a través de los medios publicados en el Sitio, los cuales pueden incluir:"
      }
    ]
  },
  {
    "type": "list",
    "items": [
      [
        {
          "text": "Nombre completo."
        }
      ],
      [
        {
          "text": "Empresa o institución a la que pertenece y cargo."
        }
      ],
      [
        {
          "text": "Datos de contacto: correo electrónico y número telefónico."
        }
      ],
      [
        {
          "text": "La demás información que usted incluya en su comunicación."
        }
      ]
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Lhopital "
      },
      {
        "text": "no solicita datos personales sensibles",
        "bold": true
      },
      {
        "text": ". Le pedimos no incluir en sus comunicaciones información sensible."
      }
    ]
  },
  {
    "type": "heading",
    "text": "IV. FINALIDADES DEL TRATAMIENTO"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Finalidades primarias.",
        "bold": true
      },
      {
        "text": " Sus datos personales se tratarán para las siguientes finalidades, que son necesarias para atender la comunicación que usted inicia con nosotros:"
      }
    ]
  },
  {
    "type": "list",
    "items": [
      [
        {
          "text": "Atender y dar respuesta a sus consultas, comentarios o solicitudes de información."
        }
      ],
      [
        {
          "text": "Canalizar su solicitud a la división de Lhopital que corresponda (Lhopital FR o Lhopital Moto)."
        }
      ],
      [
        {
          "text": "Dar seguimiento a la comunicación que usted inicie con nosotros."
        }
      ],
      [
        {
          "text": "Cumplir con obligaciones legales y atender requerimientos de autoridades competentes."
        }
      ]
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Finalidades secundarias.",
        "bold": true
      },
      {
        "text": " Adicionalmente, y solo si usted no se opone, podremos tratar sus datos para:"
      }
    ]
  },
  {
    "type": "list",
    "items": [
      [
        {
          "text": "Enviarle información sobre productos, servicios, lanzamientos y eventos de Lhopital y sus divisiones."
        }
      ],
      [
        {
          "text": "Invitarle a participar en encuestas de satisfacción."
        }
      ]
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Si no desea que sus datos personales sean tratados para las finalidades secundarias, puede manifestarlo en cualquier momento enviando un correo electrónico a contacto@lhopital.mx con el asunto “Finalidades secundarias”. Su negativa no será motivo para dejar de atender su solicitud."
      }
    ]
  },
  {
    "type": "heading",
    "text": "V. CONSENTIMIENTO"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "De conformidad con el artículo 7 de la Ley, se entenderá que usted otorga su consentimiento tácito para el tratamiento de sus datos personales en los términos de este Aviso cuando, habiéndolo tenido a su disposición en el Sitio, nos proporcione sus datos y no manifieste su oposición. Usted puede revocar su consentimiento en cualquier momento conforme al procedimiento descrito en la sección VIII, sin que ello tenga efectos retroactivos."
      }
    ]
  },
  {
    "type": "heading",
    "text": "VI. TRANSFERENCIAS DE DATOS PERSONALES"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Lhopital no vende, renta ni comercializa sus datos personales. Sus datos podrán ser tratados por proveedores que presten servicios a Lhopital (por ejemplo, servicios de correo electrónico, hospedaje o almacenamiento de información), quienes actuarán como personas encargadas por cuenta de Lhopital y bajo obligaciones de confidencialidad y seguridad."
      }
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Lhopital podrá transferir sus datos personales sin requerir su consentimiento, en los supuestos previstos en el artículo 36 de la Ley, a:"
      }
    ]
  },
  {
    "type": "list",
    "items": [
      [
        {
          "text": "Sociedades controladoras, subsidiarias o afiliadas bajo el control común de Lhopital, para atender su solicitud."
        }
      ],
      [
        {
          "text": "Autoridades competentes, cuando así lo exija una disposición legal, o sea necesario para la procuración o administración de justicia."
        }
      ],
      [
        {
          "text": "Terceros, cuando sea preciso para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial."
        }
      ]
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Cualquier otra transferencia que requiera su consentimiento le será solicitada previamente."
      }
    ]
  },
  {
    "type": "heading",
    "text": "VII. MEDIDAS DE SEGURIDAD"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Lhopital ha establecido medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado. Las personas que intervienen en el tratamiento de sus datos están obligadas a guardar confidencialidad, aun después de terminada su relación con Lhopital. En caso de una vulneración de seguridad que afecte de forma significativa sus derechos patrimoniales o morales, se lo informaremos de inmediato para que pueda tomar las medidas correspondientes."
      }
    ]
  },
  {
    "type": "heading",
    "text": "VIII. DERECHOS ARCO Y REVOCACIÓN DEL CONSENTIMIENTO"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Usted tiene derecho a "
      },
      {
        "text": "acceder",
        "bold": true
      },
      {
        "text": " a sus datos personales, "
      },
      {
        "text": "rectificarlos",
        "bold": true
      },
      {
        "text": " cuando sean inexactos o incompletos, "
      },
      {
        "text": "cancelarlos",
        "bold": true
      },
      {
        "text": " y "
      },
      {
        "text": "oponerse",
        "bold": true
      },
      {
        "text": " a su tratamiento (derechos ARCO), así como a revocar el consentimiento otorgado. Para ello, Lhopital ha designado a su Departamento de Datos Personales, al cual puede dirigir su solicitud por los siguientes medios:"
      }
    ]
  },
  {
    "type": "list",
    "items": [
      [
        {
          "text": "Correo electrónico: contacto@lhopital.mx."
        }
      ],
      [
        {
          "text": "Teléfono: (55) 9462 1951, en horario de 11:00 a 14:00 y de 16:00 a 19:00 horas, en días hábiles."
        }
      ]
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Su solicitud deberá contener:"
      }
    ]
  },
  {
    "type": "list",
    "items": [
      [
        {
          "text": "Su nombre y domicilio, o cualquier otro medio para recibir notificaciones."
        }
      ],
      [
        {
          "text": "Los documentos que acrediten su identidad o, en su caso, la personalidad e identidad de su representante legal."
        }
      ],
      [
        {
          "text": "La descripción clara y precisa de los datos personales respecto de los que busca ejercer alguno de los derechos ARCO (salvo que se trate del derecho de acceso)."
        }
      ],
      [
        {
          "text": "El derecho que desea ejercer o lo que solicita."
        }
      ],
      [
        {
          "text": "Cualquier otro elemento o documento que facilite la localización de sus datos."
        }
      ]
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "En el caso de solicitudes de rectificación, deberá indicar además las modificaciones a realizarse y aportar la documentación que sustente su petición."
      }
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Lhopital le comunicará la determinación adoptada en un plazo máximo de 20 (veinte) días hábiles contados a partir de la recepción de su solicitud y, de resultar procedente, la hará efectiva dentro de los 15 (quince) días hábiles siguientes. Estos plazos podrán ampliarse una sola vez por un periodo igual cuando las circunstancias del caso lo justifiquen. La respuesta se le enviará por el mismo medio por el que presentó su solicitud."
      }
    ]
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "El ejercicio de los derechos ARCO es gratuito; únicamente podrán cobrarse los costos de reproducción, copias o envío. Le informamos que, en los casos previstos por la Ley, Lhopital podrá negar total o parcialmente su solicitud, o no estar obligada a cancelar sus datos, por ejemplo, cuando deban conservarse por disposición legal. En todo caso, se le informará el motivo."
      }
    ]
  },
  {
    "type": "heading",
    "text": "IX. LIMITACIÓN DEL USO O DIVULGACIÓN DE SUS DATOS"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Además de los derechos anteriores, usted puede solicitar en cualquier momento que limitemos el uso o divulgación de sus datos personales, incluyendo dejar de recibir información comercial. Para ello, envíe su solicitud a contacto@lhopital.mx siguiendo el procedimiento de la sección VIII. Su solicitud será atendida en un plazo máximo de 20 (veinte) días hábiles y, de ser procedente, sus datos serán registrados en nuestra lista interna de exclusión."
      }
    ]
  },
  {
    "type": "heading",
    "text": "X. PROCEDIMIENTO DE PROTECCIÓN DE DERECHOS"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede presentar una solicitud de protección de datos ante la "
      },
      {
        "text": "Secretaría Anticorrupción y Buen Gobierno",
        "bold": true
      },
      {
        "text": ", autoridad competente en la materia, dentro de los 15 (quince) días hábiles siguientes a la fecha en que Lhopital le comunique su respuesta o, si no recibe respuesta, a partir de que venza el plazo con el que contamos para responder, en términos del artículo 40 de la Ley."
      }
    ]
  },
  {
    "type": "heading",
    "text": "XI. COOKIES Y DATOS DE NAVEGACIÓN"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "El Sitio no utiliza cookies ni otras tecnologías de rastreo con fines publicitarios o para identificar a sus visitantes. Como ocurre con la mayoría de los sitios web, el servidor que lo aloja puede registrar automáticamente información técnica de navegación (como dirección IP, tipo de navegador, fecha y hora de acceso) con fines de seguridad y funcionamiento del Sitio. Esta información no se utiliza para identificarle personalmente."
      }
    ]
  },
  {
    "type": "heading",
    "text": "XII. CAMBIOS AL AVISO DE PRIVACIDAD"
  },
  {
    "type": "p",
    "runs": [
      {
        "text": "Lhopital podrá modificar o actualizar este Aviso de Privacidad por cambios legislativos, en sus políticas internas o en sus prácticas de tratamiento de datos. Cualquier modificación se publicará en www.lhopitalcorp.mx, indicando la fecha de la última actualización. Le recomendamos consultarlo periódicamente."
      }
    ]
  },
  {
    "type": "heading",
    "text": "Última actualización: 22 de octubre de 2026"
  }
];
