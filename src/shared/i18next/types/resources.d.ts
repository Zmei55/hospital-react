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
    user: {
      department: string;
      station: {
        surgery: string;
      };
      position: {
        position: string;
        nurse: string;
      };
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
      notFoundException: string;
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
      loader: string;
    };
    unknownPart: {
      title: string;
      text: string;
    };
  };
}

export default Resources;
