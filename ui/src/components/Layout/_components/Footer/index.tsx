// TODO: Replace h3 with text or logo.

import { IFooterProps } from './types';

export const Footer = ({ email, phone }: IFooterProps) => (
  <footer>
    <h3>Telzin</h3>
    <div>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
    <div className="footer-component__logos">
      <div />
      <div />
      <div />
      <div />
    </div>
    <p>Telzir Empresa Ficticia LTDA @2022. Todo os direitos reservados.</p>
    <p>
      A imagem utilizada a cima não foi licenciada. Não está sendo usdada para
      fins comerciais e sem intenções de lucro. Créditos e copyright da imagem:
      https://wallpaperscraft.com/download/street_night_wet_155637/2560x1024
    </p>
  </footer>
);
