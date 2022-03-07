export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'nat8_to_nat' : IDL.Func([IDL.Nat8], [IDL.Nat], []) });
};
export const init = ({ IDL }) => { return []; };
