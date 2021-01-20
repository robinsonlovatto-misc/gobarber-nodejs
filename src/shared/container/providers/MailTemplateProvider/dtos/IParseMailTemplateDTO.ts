interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IPArseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
