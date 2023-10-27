interface Resources {
  translation: {
    layout: {
      title: string;
      menuTitle: string;
      language: string;
      selectLanguage: string;
    };
    auth: {
      title: string;
      text: string;
      loginInput: string;
      passwordInput: string;
      authError: string;
    };
    desktop: {
      addRequest: string;
      findRequest: string;
      findContainer: string;
      documents: string;
    };
    patient: {
      selectPatientBtn: string;
      title: string;
      name: string;
      workplace: string;
      dateOfBirth: string;
      cardNumber: string;
      sex: string;
      MALE: string;
      FEMALE: string;
      DIVERSE: string;
      medicalCard: string;
      phone: string;
      email: string;
      identityDocument: string;
      residenceAddress: string;
      NotFoundPatientText: string;
    };
    service: {
      title: string;
      service: string;
      servicesBtnIsActive: string;
      servicesBtnIsDisabled: string;
      implementer: string;
      modalTitle: string;
      filterPlaceholder: string;
      servicesSelected: string;
    };
    container: {
      title: string;
      containerBtnIsActive: string;
      containerBtnIsDisabled_V1: string;
      containerBtnIsDisabled_V2: string;
    };
    newRequest: {
      title: string;
    };
    findRequest: {
      title: string;
      requestNumber: string;
      dateOfRequest: string;
      selectBtn: string;
    };
    shared: {
      button: {
        signIn: string;
        signOut: string;
        save: string;
        add: string;
        find: string;
        select: string;
        reset: string;
        abort: string;
        saveAndCancel: string;
      };
    };
    UnknownPart: {
      title: string;
      text: string;
    };
  };
}

export default Resources;

// interface Resources {
//   translation: {
//     layout: {
//       title: "АРМ «Behandlungsraum»";
//       menuTitle: "Benutzermenü";
//       language: "Sprache";
//       selectLanguage: "Wählen Sie eine Sprache";
//     };
//     auth: {
//       title: "Autorisierung";
//       text: "Geben Sie Login und Password ein";
//       loginInput: "Benutzername";
//       passwordInput: "Kennwort";
//       authError: "Benutzerdaten wurden falsch eingegeben";
//     };
//     desktop: {
//       addRequest: "Erstellen Sie einen Antrag";
//       findRequest: "Finden Sie einen Antrag";
//       findContainer: "Finden Sie eine Behälter";
//       documents: "Unterlagen";
//     };
//     patient: {
//       selectPatientBtn: "Wählen Sie einen Patient aus";
//       title: "Wählen Sie einen Patient aus";
//       name: "Vorname und Nachname";
//       workplace: "Abteilung";
//       dateOfBirth: "Geburtsdatum";
//       cardNumber: "Kennnummer";
//       sex: "Geschlecht";
//       medicalCard: "Medizinische Karte";
//       phone: "Telefonnummer";
//       email: "E-mail";
//       identityDocument: "Identitätsdokument";
//       residenceAddress: "Wohnortsanschrift";
//       NotFoundPatientText: "Patient mit solchen Daten wurde nicht gefunden";
//     };
//     service: {
//       title: "Services";
//       service: "Service";
//       servicesBtnIsActive: "Fügen Sie Dienste hinzu";
//       servicesBtnIsDisabled: "Dienste können nach Auswahl eines Patienten hinzugefügt werden";
//       implementer: "Wahl des Labors";
//       modalTitle: "Dienst hinzufügen";
//       filterPlaceholder: "Dienstleistungscode, Dienstleistungsname";
//       servicesSelected: "Ausgewählte Dienste";
//     };
//     container: {
//       title: "Behälter";
//       containerBtnIsActive: "Sie können Behälter berechnen";
//       containerBtnIsDisabled_V1: "Sie können Behälter berechnen, nachdem Sie Dienste hinzugefügt und eine Labore ausgewählt haben";
//       containerBtnIsDisabled_V2: "Sie können Behälter berechnen, nachdem Sie eine Labore ausgewählt haben";
//     };
//     newRequest: {
//       title: "Neuer Antrag";
//     };
//     findRequest: {
//       title: "Finden Sie einen Antrag";
//       requestNumber: "Antragsnummer";
//       dateOfRequest: "Antragsdatum";
//       selectBtn: "Antragsdetails";
//     };
//     shared: {
//       button: {
//         signIn: "Einloggen";
//         signOut: "Abmelden";
//         save: "Speichern";
//         add: "Hinzufügen";
//         find: "Finden";
//         select: "Wählen";
//         reset: "Rücksetzen";
//         abort: "Abbruch";
//         saveAndCancel: "Speichern und schließen";
//       };
//     };
//     UnknownPart: {
//       title: "Unbekanntes Teil";
//       text: "Leider weiß ich nicht, wie dieser Block funktioniert, daher bitte ich mich zu verstehen und zu verzeihen.";
//     };
//   };
// }
