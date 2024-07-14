declare global {
  type data = [
    [
      {
        time_from: string;
        time_to: string;
        course_code: string;
        course_name: string;
        schedule_type: string;
        professor: [string];
      }
    ]
  ];
}
