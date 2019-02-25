import * as React from "react";
import { IconName, IconSvgPaths16, IconSvgPaths20 } from "@blueprintjs/icons";
import theme from "./Theme";

export interface IconProps {
  color?: string;
  icon: IconName | JSX.Element | null;

  /** Use the icon prop instead */
  children?: never;

  /**
   * Size of the icon in pixels.
   * @default Icon.SIZE_STANDARD = 16
   */
  size: number;
  title?: string;
  style?: React.CSSProperties;
}

export class Icon extends React.Component<IconProps> {
  static defaultProps = {
    size: 16,
    color: theme.colors.palette.neutral.dark
  };

  static readonly SIZE_STANDARD = 16;
  static readonly SIZE_LARGE = 20;

  render() {
    const { title, color, icon, size = Icon.SIZE_STANDARD } = this.props;

    if (icon == null) return null;
    else if (typeof icon !== "string") return icon;

    const pixelGridSize =
      size >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
    const paths = this.renderSvgPaths(pixelGridSize, icon);
    if (paths == null) {
      return null;
    }

    const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`;
    let { style = {} } = this.props;
    if (color != null) {
      style = { ...style, fill: color };
    }

    return (
      <svg
        style={style}
        data-icon={icon}
        width={size}
        height={size}
        color={color}
        viewBox={viewBox}
      >
        {title ? <title>{title}</title> : null}
        {paths}
      </svg>
    );
  }

  private renderSvgPaths(pathsSize: number, iconName: IconName) {
    const svgPathsRecord =
      pathsSize === Icon.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
    const pathStrings = svgPathsRecord[iconName];
    if (pathStrings == null) {
      return null;
    }
    return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />);
  }
}
