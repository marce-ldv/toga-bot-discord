namespace WaifuCard {

  type PowersName = 'attitude' | 'sexiness' | 'cuteness';
  type PowersStats = Record<PowersName, number>

  interface WaifuCardProps {
    stars: number;
    name: string;
    powers: PowersStats;
    powerRival: PowersName;
    series: string;
  }

  export class WaifuCard {
    public readonly waifuProps: WaifuCardProps;

    constructor(props: WaifuCardProps) {
      this.waifuProps = props;
    }
  }
}