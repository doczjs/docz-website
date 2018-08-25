import { injectGlobal } from 'react-emotion'

// tslint:disable

injectGlobal`
#carbonads {
  --width: 280px;
  --img-width: 130px;
  --font-size: 14px;
}

#carbonads {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: block;
  overflow: hidden;
  max-width: var(--width);
  margin-top: 40px;
  margin-bottom: 50px;
  padding: .7rem;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, .1);
  background-color: transparent;
  font-size: var(--font-size);
  line-height: 1.5;
}

#carbonads a {
  color: inherit;
  text-decoration: none;
}

#carbonads a:hover {
  color: inherit;
}

#carbonads span {
  position: relative;
  display: block;
  overflow: hidden;
}

.carbon-img {
  margin-bottom: 8px;
  max-width: var(--img-width);
  line-height: 1;
}

.carbon-img img {
  display: block;
  margin: 0 auto;
  max-width: var(--img-width) !important;
  width: var(--img-width);
  height: auto;
}

.carbon-text {
  display: block;
  padding: 12px 0;
  font-size: 12px;
}

.carbon-poweredby {
  display: block;
  padding: 10px var(--font-size);
  background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 9px;
  line-height: 0;
}
`
