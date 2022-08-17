export type TransparencyType = {
  dados_gerais: {
    usuarios_registrados: number;
    incricoes_realizadas: number;
    cursos_ativos: number;
    direito_certificacao: number;
    investimento_medio_curso: string;
    investimento_medio_aluno: string;
  };
  usuarios_por_curso: [
    {
      curso: string;
      usuarios: number;
    },
    {
      curso: string;
      usuarios: number;
    },
    {
      curso: string;
      usuarios: number;
    },
    {
      curso: string;
      usuarios: number;
    }
  ];
  usuarios_por_estado: [
    {
      estados: string;
      usuarios_totais: number;
      direito_certificacao: number;
    }
  ];
};

export type StateObjectType = {
  estados: string;
  usuarios_totais: number;
  direito_certificacao: number;
};
