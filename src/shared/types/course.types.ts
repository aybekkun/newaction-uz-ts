export interface ILesson {
    id:          number;
    name:        string;
    course_id:   number;
    available:   boolean;
    sub_lessons: ISubLesson[];
}

export interface ISubLesson {
    id:            number;
    name:          string;
    lesson_id:     number;
    sub_lesson_2s: IMaterial[];
}

export interface IMaterial {
    id:   number;
    name: string;
}