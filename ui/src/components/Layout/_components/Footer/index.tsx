import { Text } from '../../../Text';
import { IFooterProps } from './types';
import classes from './styles.module.scss';

export const Footer = ({ email, phone }: IFooterProps) => (
  <footer className={classes.footer}>
    <Text className={classes.logo} color="pureWhite" weight="bold">
      Telzir
    </Text>
    <address className={classes.addressLine}>
      <Text color="pureWhite" variant="footnote">
        {email}
      </Text>
      <Text color="pureWhite" variant="footnote">
        {phone}
      </Text>
    </address>
    <address className={classes.socialMedia}>
      <div className={classes.socialCircle} />
      <div className={classes.socialCircle} />
      <div className={classes.socialCircle} />
      <div className={classes.socialCircle} />
    </address>
    <Text color="pureWhite" variant="footnote">
      Telzir Empresa Ficticia LTDA @2022. Todo os direitos reservados.
    </Text>
    <Text color="pureWhite" className={classes.copyrightText} variant="caption">
      A imagem utilizada a cima não foi licenciada. Não está sendo usdada para
      fins comerciais e sem intenções de lucro. Créditos e copyright da imagem:{' '}
      <a className={classes.copyrightLink}>
        https://wallpaperscraft.com/download/street_night_wet_155637/2560x1024
      </a>
    </Text>
  </footer>
);
