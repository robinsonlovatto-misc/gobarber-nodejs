interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IPArseMailTemplateDTO {
  template: string;
  variables: ITemplateVariables;
}
