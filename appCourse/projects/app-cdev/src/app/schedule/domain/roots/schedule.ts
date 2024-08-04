import { validate } from 'uuid';

type TStatus = 'draft' | 'published';

type SchedulePropsRequired = {
  title: string;
  scheduleId: string;
  courseId: string;
};

type SchedulePropsOptional = {
  image: string;
  summary: string;
  slogan: string;
  dateStart: string;
  hours: number;
  duration: number;
  frequency: string[];
  type: string;
  status: TStatus;
  whatLearn: string[];
  requirements: string[];
  content: string[];
};

type SchedulePropsToUpdate = Partial<
  Pick<SchedulePropsRequired, 'title' | 'courseId'> & SchedulePropsOptional
>;

export type ScheduleProps = SchedulePropsRequired &
  Partial<SchedulePropsOptional>;

export class Schedule {
  private readonly scheduleId!: string;
  private readonly courseId!: string;
  private title!: string;
  private image: string | undefined;
  private summary: string | undefined;
  private slogan: string | undefined;
  private dateStart: string | undefined;
  private hours: number | undefined;
  private duration: number | undefined;
  private frequency: string[] | undefined;
  private type: string | undefined;
  private status: TStatus | undefined;
  private whatLearn: string[] | undefined;
  private requirements: string[] | undefined;
  private content: string[] | undefined;

  constructor(props: ScheduleProps) {
    if (props.title.length < 3)
      throw new Error('Title must be at least 3 characters long');
    if (props.title.length > 255)
      throw new Error('Title must be at most 255 characters long');

    if (!validate(props.scheduleId)) throw new Error('Invalid scheduleId');
    if (!validate(props.courseId)) throw new Error('Invalid courseId');

    if (props.whatLearn && props.whatLearn.length < 1)
      throw new Error('What learn must have at least one item');
    if (props.requirements && props.requirements.length < 1)
      throw new Error('Requirements must have at least one item');
    if (props.content && props.content.length < 1)
      throw new Error('Content must have at least one item');
    if (props.frequency && props.frequency.length < 1)
      throw new Error('Frequency must have at least one item');

    Object.assign(this, props);
  }

  get properties() {
    return {
      title: this.title,
      scheduleId: this.scheduleId,
      courseId: this.courseId,
      image: this.image,
      summary: this.summary,
      slogan: this.slogan,
      dateStart: this.dateStart,
      hours: this.hours,
      duration: this.duration,
      frequency: this.frequency,
      type: this.type,
      status: this.status,
      whatLearn: this.whatLearn,
      requirements: this.requirements,
      content: this.content,
    };
  }

  update(props: SchedulePropsToUpdate) {
    Object.assign(this, props);
  }
}
