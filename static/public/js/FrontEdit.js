const StudentForm = {
    data() {
        return {
            years: [
                {
                    label: 'First year (I)',
                    value: '1'
                },
                {
                    label: 'Second year (II)',
                    value: '2'
                },

                {
                    label: 'Third year (III)',
                    value: '3'
                },
                {
                    label: 'Fourth year (IV)',
                    value: '4'
                }
            ],
            Course1: '0.00',
            Course2: '0.00',
            Course3: '0.00',
            Course4: '0.00',
            Course5: '0.00',
            Course6: '0.00'
        }
    }
}
Vue.createApp(StudentForm).mount('.Main')