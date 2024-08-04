type TStatus = 'draft' | 'published';

type CoursePropsRequired = {
  title: string;
};

type CoursePropsOptional = {
  courseId: string;
  slug: string;
  status: TStatus;
};

type CoursePropsToUpdate = Partial<
  CoursePropsRequired & Pick<CoursePropsOptional, 'status'>
>;

export type CourseProps = CoursePropsRequired & Partial<CoursePropsOptional>;

export class Course {
  private readonly courseId: string | undefined;
  private title!: string;
  private status: TStatus | undefined;
  private readonly slug: string | undefined;

  constructor(props: CourseProps) {
    if (props.title.length < 3)
      throw new Error('Title must be at least 3 characters long');
    if (props.title.length > 255)
      throw new Error('Title must be at most 255 characters long');

    Object.assign(this, props);
  }

  get properties() {
    return {
      title: this.title,
      courseId: this.courseId,
      status: this.status,
      slug: this.slug,
    };
  }

  update(props: CoursePropsToUpdate) {
    Object.assign(this, props);
  }
}
