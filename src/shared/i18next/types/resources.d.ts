interface Resources {
  translation: {
    layout: {
      title: {
        title: string;
        title_ADMIN: string;
        title_TREATMENT_ROOM: string;
      };
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
      department: {
        department: string;
        department_ADMINISTRATION: string;
        department_SURGERY: string;
      };
      workplace: {
        workplace: string;
        workplace_ADMIN: string;
        workplace_TREATMENT_ROOM: string;
      };
      position: {
        position: string;
        position_ADMIN: string;
        position_NURSE: string;
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
      dateOfBirth: string;
      cardNumber: string;
      gender: {
        gender: string;
        gender_MALE: string;
        gender_FEMALE: string;
        gender_DIVERSE: string;
      };
      medicalCard: string;
      phone: string;
      email: string;
      identityDocument: string;
      residenceAddress: string;
      NotFoundPatientText: string;
    };
    service: {
      title: string;
      service: {
        service: string;
        service_BtnIsActive: string;
        service_BtnIsDisabled: string;
      };
      implementer: string;
      modalTitle: string;
      filterPlaceholder: string;
      servicesSelected: string;
    };
    container: {
      container: string;
      container_BtnIsActive: string;
      container_BtnIsDisabled_V1: string;
      container_BtnIsDisabled_V2: string;
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
      name: string;
      appointed: {
        appointed: string;
        appointed_no: string;
      };
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
